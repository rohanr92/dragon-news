import React, { use } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';
import './mainnavbar.css';
import { AuthContext } from '../Provider/AuthContext';

const MainNavbar = () => {

    const {user} = use(AuthContext)


    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between p-[8px]'>
                <div>
                    {user && user.name}

                </div>
                <div>
                    <ul className='flex items-center gap-[8px]'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/career'>Careers</NavLink>
                    </ul>
                </div>
                <div className='flex items-center justify-center gap-[8px]'>
                    <FaCircleUser className='text-[40px]' />

                     <Link to='/auth/login' className='btn btn-secondary px-[25px] rounded-[0px] border-0 text-[16px] bg-gray-900 shadow-none'>Login</Link>
                </div>
            </div>
            
        </div>
    );
};

export default MainNavbar;