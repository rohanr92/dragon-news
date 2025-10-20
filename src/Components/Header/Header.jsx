import React from 'react';
import Navbar from './Navbar';
import Marque from './Marque';
import MainNavbar from './MainNavbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Marque></Marque>
            <MainNavbar></MainNavbar>
            
        </div>
    );
};

export default Header;