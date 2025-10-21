import React from 'react';
import useCategory from '../Hook/useCategory';
import { Link } from 'react-router';

const LeftAside = () => {

    const { category, loading, error } = useCategory();
    
    
    return (
        <div>
            <div>
                <h2 className='text-[20px] font-bold mb-[10px]'> All Category ({category?.length || 0})</h2>

                <div>
                    {
                        category?.map(ele => <div>
                            <Link to={`/all-categories/${ele.id}`} className='btn btn-primary w-full bg-gray-500 hover:bg-green-500 mb-[5px] active:bg-black active:text-white'>{ele.name}</Link>
                        </div> )
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftAside;