import React from 'react';
import s1 from '../../images/s1.png';
import '../../styles/Button/button.css';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
    <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between container mx-auto">
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
    );
};

export default Hero;