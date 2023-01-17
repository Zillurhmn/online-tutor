import React, { useState } from 'react';
import p1 from './../images/p1.png'

const Post = ({user, name, subject, amount, description, classTime, totalTime, totalReview, star, classLink, courseCompleteStatus, handleComplete}) => {
    
    

    return (
        <div>
            {/* -------------------All the Enrolled / post  will be here ----------------------------*/}
            <div className='m-10 p-5 flex flex-col justify-center items-center gap-10'>
                        <div className="hero w-3/4 bg-base-200 rounded-2xl">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={p1} className="h-w-64 w-64" alt='img' />
                                <div className='py-5'>
                                    <h1 className="text-xl font-bold text-[#e6c229]">{name}</h1>
                                    <h1 className='text-lg'> {subject}</h1>
                                    <h1 className='text-lg font-bold'> {amount}</h1>
                                    <p className="py-2">{description}</p>
                                    <p className="py text-sm">Education Background</p>
                                    <br />
                                    <div className='flex text-sm text-slate-600 py-2 gap-1'>
                                        <p className='font-bold'>Class Time :</p>
                                        <p> {classTime}</p>
                                    </div>
                                    <div className='flex text-sm text-slate-600 py-2 gap-1'>
                                        <p className='font-bold'>Total Time :</p>
                                        <p>{totalTime}</p>
                                    </div>
                                    <div className='flex text-sm text-slate-600 py-2 gap-1'>
                                        <p className='font-bold'>Total Review :</p>
                                        <p> {star} Star ({totalReview} reviews)</p>
                                    </div>
                                    <br />
                                    {
                                        user === 'tutor' &&
                                        <button className="btn-1">Edit Post</button>
                                    }
                                    {
                                        user !== 'tutor' &&
                                        <>
                                        {
                                        !courseCompleteStatus &&
                                        <button className="btn-1">Go to Class</button>
                                        }
                                        <button onClick={handleComplete} className="p-3 rounded-md mx-2 text-slate-900  bg-green-600" >
                                            {!courseCompleteStatus && 'Mark Complete'}
                                            { courseCompleteStatus && 'Complete'}
                                        </button>
                                        </>
                                        
                                    }
                                    <br />
                                    

                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Post;