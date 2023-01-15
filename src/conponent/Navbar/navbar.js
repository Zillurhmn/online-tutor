import React from 'react';
import logo from '../../images/a.jpg';
import { Link } from 'react-router-dom';
import '../../styles/Button/button.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar md:flex lg:justify-between  bg-[#E6C229] px-8">
                <Link className="md:flex" to="/">
                    <img src={logo} height={400} width={150} alt="" />
                </Link>
                <div className="flex-none">
                    <Link className='pr-5 text-[#262626] font-semibold text-lg' to="/">Home</Link>
                    <Link className='pr-5 text-[#262626]  font-semibold text-lg' to="/contact">Contact Us</Link>
                    <Link className='pr-5 text-[#262626]  font-semibold text-lg' to="/about">About Us</Link>
                    <Link className='pr-5 text-[#262626] font-semibold text-lg' to="/dashboard">Dashboard</Link>
                    <div className="w-10  ">
                        <img src="https://placeimg.com/80/80/people" alt='img' className='rounded-full'/>
                    </div>
                    <Link className='pr-5 text-[#262626] font-bold text-lg btn_log' to="/home">logout</Link>
                    <Link className='pr-5 text-[#262626] font-bold text-lg btn_log' to="/login">Login</Link>
                    <Link className='pr-5 text-[#262626] font-bold text-lg btn_sign' to="/signup">SignUp</Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;