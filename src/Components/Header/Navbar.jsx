import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Navbar = () => {
    return (
        <div className='my-[30px]'>
            <div className='flex justify-center items-center w-[400px] mx-auto'>
                <img src={logo} alt="" srcset="" className='w-full' />
            </div>
            <div className='text-center mt-[5px] text-gray-400'>
                <p>Journalism Without Fear or Favour</p>
            </div>
            <div className='flex justify-center items-center mt-[5px] text-gray-700'>
                {
                    format(new Date(), "'Today is a' eeee, MMMM dd, y")
                }

            </div>
            

            
        </div>
    );
};

export default Navbar;