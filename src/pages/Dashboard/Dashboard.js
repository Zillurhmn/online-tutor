import React, { useEffect, useState } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import Post from './../../conponent/Post'


const Dashboard = (user, setUser,isLoggedin,setIsLoggedin) => {
    
    const navigate = useNavigate()
    const [courseCompleteStatus, setCourseCompleteStatus] = useState(false)
    const handleComplete =()=>{
        setCourseCompleteStatus(true)
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
    },[user,setIsLoggedin,setUser])

    const userObj = user?.user[0];
    const actor = userObj.user;

    const handleCreatePost = ()=>{
        navigate("/create-post")
    }
    return (
        <div  className=' min-h-screen'>
            <div className='flex justify-around bg-slate-100 p-5'>
                <div className='w-[300px]'>
                    <h1 className='text-xl font-semibold'>Welcome to {userObj?.name || 'Name'}!</h1>
                    {/* { userObj.name && <h1 className='text-sm py-1'><span className='font-bold '>Name: </span> {userObj.name}</h1>} */}
                    { userObj.education &&   <h1 className='text-sm py-1'><span className='font-bold '>Completed: </span>{userObj?.education || 'Education Status'}</h1>}
                    {userObj.subject && <h1 className='text-sm py-1'><span className='font-bold '>Expertise: </span>{userObj?.subject || "Subject "}</h1>}
                    {userObj.email && <h1 className='text-sm py-1'><span className='font-bold '> Email: </span>{userObj?.email || "Email "}</h1>}
                </div>
                             
                <div>
                    <Link to={'/editProfile'}>
                        <div className='m-4'>
                            <AiFillSetting className=' text-3xl cursor-pointer hover:scale-110 hover:text-slate-500  transition-all ease-in'/>
                        </div>
                    </Link>
                    
                </div>
            </div>
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
                            userObj.enrollment ?
                            <Post user={'student'} name={"Md. Z R"} subject={"subject here"}
                                amount={"$223"} description={"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}  
                                backgroud={"Educational Background"} complete={"true/false"}
                                classTime={"12:00pm - 02:30pm"} totalTime={"6hour"} totalReview={"12"} star={"3"} 
                                classLink={"classlinkwillbe given"} handleComplete={handleComplete} courseCompleteStatus={courseCompleteStatus} />
                            :
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
                        <div>
                            <div className='text-center text-lg mb-80'>
                                You do not have any post yet! Post Now!
                            </div>

                        </div>
                    }

                    {/* <div>
                        <Post user={'tutor'} name={"Md. Z Rahman"} subject={"subject here"}
                            amount={"$223"} description={"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}  
                            backgroud={"Educational Background"} complete={"true/false"}
                            classTime={"12:00pm - 02:30pm"} totalTime={"6hour"} totalReview={"12"} star={"3"} 
                            classLink={"classlinkwillbe given"}  handleComplete={handleComplete} courseCompleteStatus={courseCompleteStatus}/>
                    </div> */}
                </div>
            }

        </div>
    );
};

export default Dashboard;