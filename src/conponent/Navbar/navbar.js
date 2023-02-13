import React from 'react';
import logo from '../../images/a.jpg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../styles/Button/button.css';

const Navbar = ({isLoggedin,HandleUserLog,setUser}) => {
    const navigate = useNavigate();
    
    const handleLogOut=()=>{
        HandleUserLog(false)
        setUser(null)
        navigate("/")
    }
    return (
        <>
            <nav className="navbar md:flex justify-between  bg-[#E6C229] px-8">
                <Link className="md:flex" to="/">
                    <img src={logo} height={400} width={150} alt="logo" />
                </Link>
                <div className="flex">
                    
                    <NavLink className='pr-5 text-[#262626] font-semibold text-lg' to="/">Home</NavLink>
                    <NavLink className='pr-5 text-[#262626]  font-semibold text-lg' to="/contact">Contact Us</NavLink>
                    <NavLink className='pr-5 text-[#262626]  font-semibold text-lg' to="/about">About Us</NavLink>
                    {
                        isLoggedin &&
                        <NavLink className='pr-5 text-[#262626] font-semibold text-lg' to="/dashboard">Dashboard</NavLink>
                    }
                    
                    <>
                    {
                        isLoggedin ?
                            <>
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