import React from 'react';

import s1 from '../../images/s1.png';
// import p1 from '../../images/p1.png';
import '../../styles/Button/button.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Hero = ({Allposts,setAllposts,reloadPosts,setReloadPosts , setSearchQuery}) => {
    const onValueChange = (e) => {
        let value = e.target.value.toLocaleLowerCase();
        console.log(value)
        setSearchQuery(value);
    }
    const warn =()=> alert("This section is ON Progress")
    return (
    <div >
        <div className="hero ">
            <div className="hero-content flex flex-col lg:flex-row-reverse lg:justify-between container mx-auto">
                <img src={s1} className="max-w-sm rounded-lg" alt='Img'/>
                <div>
                    <h1 className="text-5xl font-bold pb-10">Find the <span className='text-[#E6C229]'>Tutor </span>
                        <br></br> for You!
                    </h1>
                    <div className='flex justify-center '>
                        <input  onKeyUp={onValueChange}type="search" placeholder="Search Tutor" 
                        className="input input-bordered mr-5 border-[#E6C229] pl-5" />
                        <Link to='/search'>
                            <div className='btn-1 w-20'>Search</div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
{/* ------------------Profile Card View ------------------------------------------------------------------- */}
        {
            (!Allposts) && setReloadPosts(reloadPosts +1)
        }
        <div className='m-4 p-5 flex justify-center gap flex-wrap'>
            {
                Allposts && Allposts.map((obj,i)=>{
                    return (
                    <div key={i} className="hero m-4 w-[300px] bg-base-200 rounded-2xl shadow-md">
                        <div className="hero-content flex flex-col">
                            <div className='flex flex-col justify-center'>
                                {obj.topicName && <h1 className="text-xl font-bold text-[#e6c229]">{obj.topicName}</h1>}
                                {obj.name && <h1 className='text-sm py-1'><span className='font-bold '>Tutor: </span> {obj.name}</h1>}
                                {obj.education && <h1 className='text-sm py-1'><span className='font-bold '>Completed: </span>{obj.education}</h1>}
                                {obj.subject && <h1 className='text-sm py-1'><span className='font-bold '>Expertise: </span>{obj.subject}</h1>}
                                {obj.amount && <h1 className='text-sm py-1'><span className='font-bold '> Total Fee: </span>{obj.amount}</h1>}
                                {obj.totalTime && <h1 className='text-sm py-1'><span className='font-bold '>Total time: </span>{obj.totalTime}</h1>}
                               {obj.review && <h1 className='text-sm py-1'><span className='font-bold '>Review: </span>{obj.review}</h1>}
                                {obj.topicDescription && <p className="py-2 text-justify ">{obj.topicDescription}</p>}
                            </div>
                            <div className='flex gap-6' >
                                <button onClick={warn} className="btn-1" >Enroll Now</button>
                                <button onClick={warn} className="btn-1">View Profile</button>
                            </div>
                        </div>
                    </div>)
                })
            }
            {
                !Allposts && 
                <div>
                <div className="hero m-4 w-[300px] bg-base-200 rounded-2xl shadow-md">
                    <div className="hero-content flex flex-col">
                        {/* <img src={p1} className="h-14 w-14 " alt='img' /> */}
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                            <h1 className='text-lg'> Subject</h1>
                            <p className="py-6 text-justify ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className='flex gap-6' >
                            <button className="btn-1" >Enroll Now</button>
                            <button className="btn-1">View Profile</button>
                        </div>
                    </div>
                </div>
                <div className="hero m-4 w-[300px] bg-base-200 rounded-2xl shadow-md">
                    <div className="hero-content flex flex-col ">
                        {/* <img src={p1} className="h-14 w-14 " alt='img' /> */}
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                            <h1 className='text-lg'> Subject</h1>
                            <p className="py-6 text-justify ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className='flex gap-6' >
                            <button className="btn-1" >Enroll Now</button>
                            <button className="btn-1">View Profile</button>
                        </div>
                    </div>
                </div>
                <div className="hero m-4 w-[300px] bg-base-200 rounded-2xl shadow-md">
                    <div className="hero-content flex flex-col">
                        {/* <img src={p1} className="h-14 w-14 " alt='img' /> */}
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                            <h1 className='text-lg'> Subject</h1>
                            <p className="py-6 text-justify ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className='flex gap-6' >
                            <button className="btn-1" >Enroll Now</button>
                            <button className="btn-1">View Profile</button>
                        </div>
                    </div>
                </div>
                <div className="hero m-4  w-[300px] bg-base-200 rounded-2xl shadow-md">
                    <div className="hero-content flex flex-col">
                        {/* <img src={p1} className="h-14 w-14 " alt='img' /> */}
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                            <h1 className='text-lg'> Subject</h1>
                            <p className="py-6 text-justify ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className='flex gap-6' >
                            <button className="btn-1" >Enroll Now</button>
                            <button className="btn-1">View Profile</button>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    </div>  
    );
};

export default Hero;