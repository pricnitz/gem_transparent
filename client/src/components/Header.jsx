import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <nav  >
                <div className='nav_list'>
                    <img src={logo} alt="" />
                    <p className='nav_link'><a href="#home">Home</a> <span className='nave_line'></span></p>
                    <p className='nav_link'><a href="#about">About Us</a> <span className='nave_line'></span></p>
                    <p className='nav_link'><a href="#services">How to choose my diamond</a> <span className='nave_line'></span></p>
                    <p className='nav_link'><a href="#contact">Reach Us</a><span className='nave_line'></span></p>
                    <p className='nav_link'><a href="#contact">Sign Up</a><span className='nave_line'></span></p>
                </div>
            </nav>
        </header>
    );
};

export default Header
