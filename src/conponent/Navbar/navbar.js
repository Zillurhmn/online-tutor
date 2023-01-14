import React from 'react';
import logo from '../../images/a.jpg';
import { Link } from 'react-router-dom';
import '../../styles/Button/button.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../feature/login/loginSlice';
const Navbar = () => {
    const user = useSelector((state) => state.login.user)
    const dispatch = useDispatch()
    // console.log("form navbar i am = ",user);
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
                        <Link className='pr-5 text-[#262626] font-semibold text-lg' to="/student">Deshboard</Link>
                        {user?.[0]?.data?
                       <>
                       <p className='text-base '>{user?.[0]?.data?.fullName}</p>
                        <button onClick={()=>{dispatch(logOut())}} className='pr-5 text-[#c90303] font-bold text-lg btn_log'>LogOut</button>
                       </>
                        :
                        <>
                        <Link className='pr-5 text-[#262626] font-bold text-lg btn_log' to="/login">Login</Link>
                        <Link className='pr-5 text-[#262626] font-bold text-lg btn_sign' to="/signup">SignUp</Link></>}
                </div>
            </nav>
            
        </>
    );
};

export default Navbar;