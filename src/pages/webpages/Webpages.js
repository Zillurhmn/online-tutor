import React, {  useState } from 'react';
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
import Profile from './../profile/Profile'
import ContactTutor from '../contactTutor/ContactTutor';
import CreatePost from '../createPost/CreatePost';
import Chat from '../../conponent/chatting/Chat';
import SingleChat from '../../conponent/chatting/SingleChat';

const Webpages = () => {
    const [user, setUser] = useState(null);
//login true or false
    const [isLoggedin, setIsLoggedin] = useState(false);

    const HandleUserLog=(a)=>setIsLoggedin(a);
    const [Allposts, setAllposts] = useState([])
    const [admin, setAdmin] = useState(false);
    const [deleteUser, setDeleteUser] = useState(null);
//Search Query value store-------------------------------------
    const [searchQuery, setSearchQuery] = useState("")
    const [newPost, setNewPost] = useState(null);
    return (
        <>
            <Navbar isLoggedin={isLoggedin} HandleUserLog={HandleUserLog}  setUser={setUser} user={user}  setAdmin={setAdmin} admin={admin} />
            
            <Routes>
                <Route path="/" element={<Home newPost={newPost}    searchQuery={searchQuery} setSearchQuery={setSearchQuery} isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} Allposts={Allposts} setAllposts={setAllposts} setUser={setUser} user={user} />} />
                {/* <Route path="search" element={<Search Allposts={Allposts} searchQuery={searchQuery} setSearchQuery={setSearchQuery} isLoggedin={isLoggedin}/>} /> */}
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="dashboard" element={<Dashboard user={user} setUser={setUser} isLoggedin={isLoggedin}  setIsLoggedin={setIsLoggedin} />} />
                {/* <Route path='editProfile' element={<EditProfile user={user} setUser={setUser} isLoggedin={isLoggedin} /> } />                 */}
                <Route path="login" element={<Login HandleUserLog={HandleUserLog} isLoggedin={isLoggedin} user={user} setUser={setUser}/>} />
                <Route path="signup" element={<Signup HandleUserLog={HandleUserLog} isLoggedin={isLoggedin} user={user} setUser={setUser}/>} />
                <Route path="admin" element={<Admin  admin={admin} setAdmin={setAdmin} isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>} 
                    deleteUser={deleteUser} setDeleteUser={setDeleteUser}  />
                <Route path="profile/:id" element={<Profile/>} />
                <Route path="create-post" element={<CreatePost user={user} setNewPost={setNewPost} newPost={newPost}/>} />
                {/* <Route path='contact/tutor/:postId' element={<ContactTutor Allposts={Allposts} />} /> */}
                <Route path="chats/" element={<Chat />}/>
                <Route path="chats/:tutorId" element={<SingleChat />}/>
            </Routes>
            
            <Footer/>
        </>
    );
};

export default Webpages;