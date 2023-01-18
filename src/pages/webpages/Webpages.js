import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../conponent/Footer/footer';
import Navbar from '../../conponent/Navbar/navbar';
import PrivateRoute from '../../router/PrivateRoute';
import About from '../about/about';
import Admin from '../admin/admin';
import Contact from '../contact/contact';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../home/home';
import Login from '../Login/login';
import Signup from '../Login/signup';
import Search from '../tutor_search/search';
import Blog from '../blogs/blogs';
import Profile from './../profile/Profile'

const Webpages = () => {
    const [isLoggedin, setIsLoggedin] = useState(false);

    const HandleUserLog=(a)=>setIsLoggedin(a);

    return (
        <>
            <Navbar isLoggedin={isLoggedin} HandleUserLog={HandleUserLog}/>
            
            <Routes>
                <Route path="/" element={<Home isLoggedin={isLoggedin} />} />
                <Route path="search" element={<Search isLoggedin={isLoggedin}/>} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* <Route path="/login" element={<Login setUserLogin={setUserLogin()} />} /> */}
                
                <Route path="/login" element={<Login HandleUserLog={HandleUserLog} isLoggedin={isLoggedin}/>} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/profile/:id" element={<Profile/>} />
                <Route path="/create-post" element={<Profile/>} />
                {/* <Route element={<PrivateRoute/>}>
                        <Route path="/student" element={<Student />} />
                </Route> */}
                
            </Routes>
            
            <Footer/>
        </>
    );
};

export default Webpages;