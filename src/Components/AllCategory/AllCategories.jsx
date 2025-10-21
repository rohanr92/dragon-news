import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAll from '../Hook/useAll';
import News from './News';

const AllCategories = () => {
    let {id} = useParams();
    let [data, setData] = useState([]);

    const { news, loading, error } = useAll();

    console.log(news);

    useEffect(() => {

        if(id == '0') {
            setData(news);
            return;
        } else if (id == '1'){
            const filterNews = news?.filter(ele => ele.others.is_today_pick == true);
            setData(filterNews);
        } else{
        const filteredNews = news?.filter(ele => ele.category_id == id);
        // console.log(filteredNews);
        setData(filteredNews)
        
        }


    },[news, id])
    

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load news.</p>;
    

    return (
        <div>
            <p>Total News {data?.length}</p>
            <div>
                {
                    data?.map(alldata => <News alldata={alldata}></News>)
                }
            </div>
        </div>
    );
};

export default AllCategories;