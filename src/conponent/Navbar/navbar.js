import React, { useEffect } from 'react';
import { BsChatRightDots } from 'react-icons/bs';
import logo from '../../images/a.jpg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../styles/Button/button.css';

const Navbar = ({isLoggedin,HandleUserLog,user,setUser,setAdmin,admin}) => {
    const navigate = useNavigate();
    
    const handleLogOut=()=>{
        HandleUserLog(false)
        setAdmin(false)
        setUser(null)
        navigate("/")
        localStorage.setItem('userLoginData', null)
    }
     
    return (
        <>
            <nav className="p-3 flex flex-col lg:flex-row justify-between  bg-[#E6C229]">
                <Link to="/">
                    <img src={logo} className="w-[150px] h-[50px]" alt="logo" />
                </Link>
                <div className="flex justify-center items-center">
                    
                    <NavLink className='pr-5 text-[#262626] font-semibold text-lg' to="/">Home</NavLink>
                    <NavLink className='pr-5 text-[#262626]  font-semibold text-lg' to="/contact">Contact Us</NavLink>
                    <NavLink className='pr-5 text-[#262626]  font-semibold text-lg' to="/about">About Us</NavLink>
                    {
                        isLoggedin && !admin && 
                        <NavLink className='pr-5 text-[#262626] font-semibold text-lg' to="/dashboard">Dashboard</NavLink>
                    }
                    
                    <>
                    {
                        isLoggedin ?
                            <>
                            {
                                !admin &&
                                <Link to='/chats' className='px-5 ' >
                                    <BsChatRightDots className=' text-3xl text-black'/>
                                </Link>
                            }
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