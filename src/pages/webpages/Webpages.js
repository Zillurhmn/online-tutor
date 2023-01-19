import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../conponent/Footer/footer';
import Navbar from '../../conponent/Navbar/navbar';
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
    
    const [user, setUser] = useState(null);

    const [isLoggedin, setIsLoggedin] = useState(false);

    const HandleUserLog=(a)=>setIsLoggedin(a);
    const [Allposts, setAllposts] = useState(null)

 
    return (
        <>
            <Navbar isLoggedin={isLoggedin} HandleUserLog={HandleUserLog}  setUser={setUser} />
            
            <Routes>
                <Route path="/" element={<Home isLoggedin={isLoggedin} Allposts={Allposts} setAllposts={setAllposts} />} />
                <Route path="search" element={<Search isLoggedin={isLoggedin}/>} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} isLoggedin={isLoggedin}/>} />                
                <Route path="/login" element={<Login HandleUserLog={HandleUserLog} isLoggedin={isLoggedin} user={user} setUser={setUser}/>} />
                <Route path="/signup" element={<Signup HandleUserLog={HandleUserLog} isLoggedin={isLoggedin} user={user} setUser={setUser}/>} />
                <Route path="/admin" element={<Admin user={user} setUser={setUser} />} />
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