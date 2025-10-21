import React from 'react';
import { BsBookmark, BsShare, BsStar, BsStarFill, BsStarHalf, BsEye } from 'react-icons/bs';

// Helper function to render the star rating
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<BsStarFill key={`star-fill-${i}`} className="text-orange-400" />);
  }

  // Add half star
  if (halfStar) {
    stars.push(<BsStarHalf key="star-half" className="text-orange-400" />);
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<BsStar key={`star-empty-${i}`} className="text-gray-300" />);
  }

  return stars;
};

// Changed the prop name from { data } to { alldata }
const NewsCard = ({ alldata }) => {
  // Destructure from alldata
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags
  } = alldata; // Changed from data to alldata

  // Format the dates
  const shortDate = new Date(author.published_date).toISOString().split('T')[0];
  const longDate = new Date(author.published_date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Truncate details for the snippet
  const snippet = details.substring(0, 150) + '...';

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden m-4 font-sans border-[1px] border-gray-300">
      <div className="p-6">
        {/* 1. Author Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              className="h-10 w-10 rounded-full object-cover" 
              src={author.img} 
              alt={author.name} 
            />
            <div>
              <div className="text-sm font-semibold text-gray-900">{author.name}</div>
              <div className="text-xs text-gray-500">{shortDate}</div>
            </div>
          </div>
          <div className="flex space-x-3 text-gray-500">
            <BsBookmark className="h-5 w-5 cursor-pointer hover:text-gray-700" />
            <BsShare className="h-5 w-5 cursor-pointer hover:text-gray-700" />
          </div>
        </div>

        {/* 2. Title Section */}
        <h2 className="mt-4 text-xl font-bold text-gray-900 leading-tight hover:text-gray-700 cursor-pointer">
          {title}
        </h2>

        {/* 3. Image Section */}
        <img 
          className="w-full h-56 object-cover rounded-lg mt-4" 
          src={thumbnail_url} 
          alt={title} 
        />

        {/* 4. Metadata Section */}
        <div className="mt-4 text-xs text-gray-600 space-y-1">
          <p>{longDate}</p>
          <p className="truncate">
            <span className="font-semibold">Tag Cloud Tags:</span> {tags.join(', ')}
          </p>
        </div>

        {/* 5. Description & Read More */}
        <p className="mt-2 text-sm text-gray-700">
          {snippet}
          <a href="#" className="text-orange-500 hover:text-orange-600 font-medium ml-1">
            Read More
          </a>
        </p>

        {/* 6. Footer Section */}
        <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {renderStars(rating.number)}
            <span className="text-sm font-semibold text-gray-700 ml-2">
              {rating.number.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <BsEye className="h-4 w-4 mr-1.5" />
            {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;