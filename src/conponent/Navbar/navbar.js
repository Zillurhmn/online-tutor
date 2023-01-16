import React from 'react';
import logo from '../../images/a.jpg';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Button/button.css';

const Navbar = ({isLoggedin,HandleUserLog}) => {
    const navigate = useNavigate();
    const handleLogOut=()=>{
        HandleUserLog(false)
        navigate("/")
    }
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
                    
                    <>
                    {
                        isLoggedin ?
                            <>
                                <img src="https://placeimg.com/80/80/people" alt='img' className='rounded-full w-10'/>
                                <Link className='pr-5 text-[#262626] font-bold text-lg btn_log' to="/">
                                    <span onClick={handleLogOut}>logout</span></Link>
                            </>
                            :
                            <>
                                <Link className='pr-5 text-[#262626] font-bold text-lg btn_log' to="/login">Login</Link>
                                <Link className='pr-5 text-[#262626] font-bold text-lg btn_sign' to="/signup">SignUp</Link>
                            </>
                    }
                    </>
                </div>
            </nav>
        </>
    );
};

export default Navbar;