import React, { useState } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import Post from './../../conponent/Post'

const Dashboard = (user, setUser,isLoggedin) => {
    
    const navigate = useNavigate()
    

    const [courseCompleteStatus, setCourseCompleteStatus] = useState(false)
    const handleComplete =()=>{
        setCourseCompleteStatus(true)
    }
    console.log("Dashboard User",user)
    const actor = user.user[0].user;
    console.log("Dashboard User status", actor)

    return (
        <div>
            <div className='flex justify-around bg-slate-100 p-5'>
                <div className='w-[300px]'>
                    <h1 className='text-xl font-semibold'>{user.user[0].name || "Hi, User"}</h1>
                    <p>{user.bio || "Short Bio Lorem ipsum dolor sit amet."}</p>
                    
                </div>
                             
                <div>
                    <div className='m-4'>
                        <AiFillSetting className=' text-3xl'/>
                    </div>
                </div>
            </div>
{/* ---------Student Enronment Section Starts Here--------------------------- */}
            {
                (actor === 'student') &&
                <div className='flex flex-col gap-4'>
                <div className='flex justify-around gap-4 p-5'>
                    <h1 className='text-xl font-semibold w-[300px] '>Your Enrollment</h1>
                    <div>
                        <Link to={'/search'}>
                            <BiSearchAlt className=' text-3xl hover:text-black'/>
                        </Link>
                    </div>
                </div>
{/* -------------------All the Enrolled / post  will be here ----------------------------*/}
                <div>
                    <Post user={'student'} name={"Md. Z R"} subject={"subject here"}
                        amount={"$223"} description={"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}  
                        backgroud={"Educational Background"} complete={"true/false"}
                        classTime={"12:00pm - 02:30pm"} totalTime={"6hour"} totalReview={"12"} star={"3"} 
                        classLink={"classlinkwillbe given"} handleComplete={handleComplete} courseCompleteStatus={courseCompleteStatus} />
                </div>
                </div>
            }
{/* ---------Student Enronment Section Ends Here--------------------------- */}
            {
                (actor === 'tutor') &&
                <div className='flex flex-col gap-4'>
                <div className='flex justify-around gap-4 p-5'>
                    <h1 className='text-xl font-semibold w-[300px] '>Your Post</h1>
                    <Link to={'/create-post'}>Create Post +</Link>
                </div>
{/* -------------------All the Enrolled / post  will be here ----------------------------*/}
                <div>
                    <Post user={'tutor'} name={"Md. Z Rahman"} subject={"subject here"}
                        amount={"$223"} description={"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}  
                        backgroud={"Educational Background"} complete={"true/false"}
                        classTime={"12:00pm - 02:30pm"} totalTime={"6hour"} totalReview={"12"} star={"3"} 
                        classLink={"classlinkwillbe given"}  handleComplete={handleComplete} courseCompleteStatus={courseCompleteStatus}/>
                </div>
                </div>
            }

        </div>
    );
};

export default Dashboard;