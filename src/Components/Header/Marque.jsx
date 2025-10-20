import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div className='mb-[30px]'>
            <div className='w-11/12 mx-auto bg-gray-200 py-[10px] px-[10px] flex justify-center items-center gap-[8px] text-[16px] font-bold text-gray-600'>
                <div>
                    <button className='btn btn-secondary px-[25px] rounded-[0px] border-0 text-[16px] bg-red-700'>Latest</button>
                </div>
                <div>
                    <Marquee pauseOnHover='true'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, esse.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, esse.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, esse.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, esse.</p>
                    </Marquee>
                </div>

            </div>
        </div>
    );
};

export default Marque;