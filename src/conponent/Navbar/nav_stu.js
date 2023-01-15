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
                <div className="flex">
                    <Link className='pr-5 text-[#262626] font-semibold text-lg' to="/student">Dashboard</Link>
                    <Link className='pr-5 text-[#262626]  font-semibold text-lg' to="/student">My Profile</Link>
                    <Link className='pr-5 text-[#262626]  font-semibold text-lg' to="/contact">Contact Us</Link>
                    <Link className='pr-5 text-[#262626]  font-semibold text-lg' to="/about">About Us</Link>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='img'/>
                            </div>
                        </label>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;