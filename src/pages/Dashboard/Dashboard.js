import React, { useEffect, useState } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import Post from './../../conponent/Post'
import ProfileEdit from './ProfileEdit';
import TutorsCollection from './TutorsCollection';


const Dashboard = (user, setUser,isLoggedin,setIsLoggedin) => {
    
    const navigate = useNavigate()
    const [tutorsPosts, setTutorsPosts] = useState([]);
    const [deletePost, setDeletePost] = useState(null)
    const [updatePost, setUpdatePost] = useState(null)
    const [isEditProfile, setIsEditProfile] = useState(false)
    const [openEditButton, setOpenEditButton] = useState(false)
    const [profileEditData, setProfileEditData] = useState(null)
    const [enrollData, setEnrollData] = useState([])
    const [isReviewData, setIsReviewData] = useState()
    const [reload, setreload] = useState(false)
    
    const handleSetIsEditProfile =()=>{
        setIsEditProfile(!isEditProfile)
        setOpenEditButton(true)
    }
    useEffect(()=>{
        if(!user){
            if(JSON.parse(localStorage.getItem('userloginData'))){
                console.log("find user data in local storage")
                setUser(JSON.parse(localStorage.getItem('userloginData')));
                setIsLoggedin(JSON.parse(localStorage.getItem('userloginData'))?true:false)
                console.log("user set to ",user);
            }
        }

    },[user,setIsLoggedin])
    
    let userObj = user.user;
    let actor = userObj.user;
    let id = userObj._id;
//===========================================Fetching Tutors post/ Student Enrollment===================================
    useEffect(()=>{
        if(actor === 'tutor'){
            fetch(`http://localhost:5000/posts/${id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                } ,
            })
            .then((res) => res.json())
            .then((result) => setTutorsPosts(result))
        }
        if(actor === 'student'){
            fetch(`http://localhost:5000/enrollData/${id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                } ,
            })
            .then((res) => res.json())
            .then((result) => setEnrollData(result)) //setEnrollData(result)
        }
    },[id,deletePost,updatePost,profileEditData,isReviewData,reload])

    
    const handleCreatePost = ()=>{
        navigate("/create-post")
    }
    
    
    
    return (
        <div  className=' min-h-screen'>
            <div className='flex justify-around bg-slate-100 p-5'>
                <div className='w-[300px]'>
                    <h1 className='text-xl font-semibold'>Welcome {userObj?.name || 'Name'}!</h1>
                    <h1 className='text-xl font-semibold'>Id {userObj?._id || 'id'}</h1>
                    {/* { userObj.name && <h1 className='text-sm py-1'><span className='font-bold '>Name: </span> {userObj.name}</h1>} */}
                    { userObj?.education  &&   <h1 className='text-sm py-1'><span className='font-bold '>Completed: </span>{userObj.education || 'Education Status'}</h1>}
                    {userObj.subject && <h1 className='text-sm py-1'><span className='font-bold '>Expertise: </span>{userObj?.subject || "Subject "}</h1>}
                    {userObj.email && <h1 className='text-sm py-1'><span className='font-bold '> Email: </span>{userObj?.email || "Email "}</h1>}
                    {userObj.description && <h1 className='text-sm py-1'><span className='font-bold '> Description: </span>{userObj?.description || "Email "}</h1>}
                </div>
                <div className='m-4' onClick={handleSetIsEditProfile}>
                    <AiFillSetting className=' text-3xl cursor-pointer hover:scale-110 hover:text-slate-500  transition-all ease-in'/>
                </div>                    
            </div>
{/* -------------Profile Edit Options---------------------------------------------- */}
            {
                isEditProfile &&  openEditButton &&
                <ProfileEdit 
                setProfileEditData={setProfileEditData} 
                setIsEditProfile={setIsEditProfile}
                handleSetIsEditProfile={handleSetIsEditProfile} 
                userObj={userObj} 
                setUser={setUser}
                openEditButton={openEditButton}
                setOpenEditButton={setOpenEditButton}
                />
            }


{/* ---------Student Enronment Section Starts Here--------------------------- */}
            {
                (actor === 'student') &&
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-around gap-4 p-5'>
                        <h1 className='text-xl font-semibold w-[300px] '>Your Enrollment</h1>
                        <div>
                            <Link to={'/'}>
                                <BiSearchAlt className=' text-3xl hover:text-black'/>
                            </Link>
                        </div>
                    </div>
    {/* -------------------All the Enrolled / post  will be here ----------------------------*/}
                    <div>
                        {
                            actor ==="student" &&
                            enrollData.map(obj=> 
                                <Post 
                                enrollData={obj} 
                                id={id} 
                                userName={userObj.name} 
                                setIsReviewData={setIsReviewData} 
                                isReviewData={isReviewData} 
                                reload={reload}
                                setreload={setreload}
                                />
                                )
                            }
                        { 
                        !enrollData && (actor ==='student') &&
                            <div className=' text-2xl text-center'>
                                <p>
                                    Ops you don't have done any class yet!
                                </p>
                                <Link to={'/'}>
                                    <div className='text-blue-500 underline mb-[100px] mt-[100px]'>Explore classes </div>
                                </Link> 
                                
                            </div>
                        }
                    </div>
                </div>
            }
{/* ---------Student Enronment Section Ends Here--------------------------- */}
            {
                (actor === 'tutor') &&
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-around gap-4 p-5'>
                        <h1 className='text-xl font-semibold w-[300px] '>Your Post</h1>
                        {/* <Link to={'/create-post'}>Create Post +</Link> */}
                        <button className='btn' onClick={handleCreatePost}>Create Post</button>
                    </div>
    {/* -------------------All the Enrolled / post  will be here ----------------------------*/}
                    {
                        actor === "tutor" && 
                        <div className='p-10 w-full'>
                            <TutorsCollection  
                            tutorsPosts={tutorsPosts} 
                            setDeletePost={setDeletePost} 
                            setUpdatePost={setUpdatePost}/>
                        </div>
                    }
                    {
                        !tutorsPosts && 
                            <div className='text-center text-lg mb-80'>
                                You do not have any post yet! Post Now!
                            </div>
                    }
                </div>
            }

        </div>
    );
};

export default Dashboard;