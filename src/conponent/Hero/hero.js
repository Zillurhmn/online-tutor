import React from 'react';

import s1 from '../../images/s1.png';
import p1 from '../../images/p1.png';
import '../../styles/Button/button.css';

import { Link, useNavigate } from 'react-router-dom';

const Hero = ({isLoggedin}) => {
    const navigate = useNavigate();

    const checkLogin =()=>{
        isLoggedin?
            navigate('/profile')
        :   navigate('/login')
    }
    return (
    <div >
        <div className="hero ">
            <div className="hero-content flex flex-col lg:flex-row-reverse lg:justify-between container mx-auto">
                <img src={s1} className="max-w-sm rounded-lg" alt='Img'/>
                <div>
                    <h1 className="text-5xl font-bold pb-10">Find the <span className='text-[#E6C229]'>Tutor </span>
                        <br></br> for You!
                    </h1>
                    <input type="search" placeholder="Search Tutor" 
                    className="input input-bordered mr-5 border-[#E6C229] pl-5" />
                    <Link to='/search'>
                        <button className='btn-1'>Search</button>
                    </Link>
                </div>
            </div>
        </div>
{/* ------------------Profile Card View ------------------------------------------------------------------- */}
        <div className='m-[4%] p-5 flex justify-around gap-3'>
            <div className="hero w-[25%] bg-base-200 rounded-2xl shadow-md">
                <div className="hero-content flex flex-col">
                    <img src={p1} className="h-14 w-14 " alt='img' />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                        <h1 className='text-lg'> Subject</h1>
                        <p className="py-6 text-justify ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className='flex gap-6' >
                        <button className="btn-1" onClick={checkLogin}>Enroll Now</button>
                        <button className="btn-1">View Profile</button>
                    </div>
                </div>
            </div>
            <div className="hero w-[25%] bg-base-200 rounded-2xl shadow-md">
                <div className="hero-content flex flex-col">
                    <img src={p1} className="h-14 w-14 " alt='img' />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                        <h1 className='text-lg'> Subject</h1>
                        <p className="py-6 text-justify ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className='flex gap-6' >
                        <button className="btn-1" onClick={checkLogin}>Enroll Now</button>
                        <button className="btn-1">View Profile</button>
                    </div>
                </div>
            </div>
            <div className="hero w-[25%] bg-base-200 rounded-2xl shadow-md">
                <div className="hero-content flex flex-col">
                    <img src={p1} className="h-14 w-14 " alt='img' />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                        <h1 className='text-lg'> Subject</h1>
                        <p className="py-6 text-justify ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className='flex gap-6' >
                        <button className="btn-1" onClick={checkLogin}>Enroll Now</button>
                        <button className="btn-1">View Profile</button>
                    </div>
                </div>
            </div>
            <div className="hero w-[25%] bg-base-200 rounded-2xl shadow-md">
                <div className="hero-content flex flex-col">
                    <img src={p1} className="h-14 w-14 " alt='img' />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                        <h1 className='text-lg'> Subject</h1>
                        <p className="py-6 text-justify ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className='flex gap-6' >
                        <button className="btn-1" onClick={checkLogin}>Enroll Now</button>
                        <button className="btn-1">View Profile</button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    );
};

export default Hero;