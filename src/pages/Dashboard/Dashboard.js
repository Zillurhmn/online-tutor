import React, { useState } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import p1 from './../../images/p1.png'


const Dashboard = () => {
    const [courseCompleteStatus, setCourseCompleteStatus] = useState(false)
    const handleComplete =()=>{
        setCourseCompleteStatus(true)
    }
    return (
        <div>
            <div className='flex justify-around bg-slate-100 p-5'>
                <div className='w-[300px]'>
                    <h1 className='text-xl font-semibold'>Your Name</h1>
                    <p>Short Bio Lorem ipsum dolor sit amet.</p>
                    
                </div>
                <div>
                    <div className='m-4'>
                        <AiFillSetting className=' text-3xl'/>
                    </div>
                </div>
            </div>
{/* ---------Student Enronment Section Starts Here--------------------------- */}
            <div className='flex flex-col gap-4'>
                <div className='flex justify-around gap-4 p-5'>
                    <h1 className='text-xl font-semibold w-[300px] '>Your Enrollment</h1>
                    <div>
                        <Link to={'/search'}>
                            <BiSearchAlt className=' text-3xl hover:text-black'/>
                        </Link>
                    </div>
                </div>
                <div>
{/* -------------------All the Enrolled / post  will be here ----------------------------*/}
                    <div className='m-10 p-5 flex flex-col justify-center items-center gap-10'>
                        <div className="hero w-3/4 bg-base-200 rounded-2xl">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={p1} className="h-w-64 w-64" alt='img' />
                                <div className='py-5'>
                                    <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                                    <h1 className='text-lg'> Subject</h1>
                                    <h1 className='text-lg font-bold'> $23</h1>
                                    <p className="py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <p className="py text-sm">Education Background</p>
                                    <br />
                                    <div className='flex text-sm text-slate-600 py-2 gap-1'>
                                        <p className='font-bold'>Class Time :</p>
                                        <p> 12:00pm - 02:30pm</p>
                                    </div>
                                    <div className='flex text-sm text-slate-600 py-2 gap-1'>
                                        <p className='font-bold'>Total Time :</p>
                                        <p>3hour</p>
                                    </div>
                                    <div className='flex text-sm text-slate-600 py-2 gap-1'>
                                        <p className='font-bold'>Total Review :</p>
                                        <p> 4 Star (23reviews)</p>
                                    </div>
                                    <br />
                                    {
                                        !courseCompleteStatus &&
                                        <button className="btn-1">Go to Class</button>
                                    }
                                    <button onClick={handleComplete} className="p-3 rounded-md mx-2 text-slate-900  bg-green-600" >
                                        { !courseCompleteStatus && 'Mark Complete'}
                                        { courseCompleteStatus && 'Complete'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* ---------Student Enronment Section Ends Here--------------------------- */}
<div className='flex flex-col gap-4'>
                <div className='flex justify-around gap-4 p-5'>
                    <h1 className='text-xl font-semibold w-[300px] '>Your Post</h1>
                    <Link to={'/create-post'}>Create Post +</Link>
                </div>
                <div>
{/* -------------------All the Enrolled / post  will be here ----------------------------*/}
                    <div className='m-10 p-5 flex flex-col justify-center items-center gap-10'>
                        <div className="hero w-3/4 bg-base-200 rounded-2xl">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={p1} className="h-w-64 w-64" alt='img' />
                                <div className='py-5'>
                                    <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                                    <h1 className='text-lg'> Subject</h1>
                                    <h1 className='text-lg font-bold'> $23</h1>
                                    <p className="py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <p className="py text-sm">Education Background</p>
                                    <br />
                                    <div className='flex text-sm text-slate-600 py-2 gap-1'>
                                        <p className='font-bold'>Class Time :</p>
                                        <p> 12:00pm - 02:30pm</p>
                                    </div>
                                    <div className='flex text-sm text-slate-600 py-2 gap-1'>
                                        <p className='font-bold'>Total Time :</p>
                                        <p>3hour</p>
                                    </div>
                                    <div className='flex text-sm text-slate-600 py-2 gap-1'>
                                        <p className='font-bold'>Total Review :</p>
                                        <p> 4 Star (23reviews)</p>
                                    </div>
                                    <br />
                                    <button className="btn-1">Edit Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;