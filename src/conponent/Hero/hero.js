import React from 'react';
import s1 from '../../images/s1.png';
import '../../styles/Button/button.css';
const Hero = () => {
    return (
    <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between container mx-auto">
            <img src={s1} className="max-w-sm rounded-lg" />
            <div>
                    <h1 className="text-5xl font-bold pb-10">Find the <spam className='text-[#E6C229]'>Tutor </spam><br></br> for You!</h1>
                    
                <input type="text" placeholder="Search Tutor" className="input input-bordered mr-5 border-[#E6C229] pl-5" />
               <button className='btn-1'>Search</button>
            </div>
        </div>
</div>
    );
};

export default Hero;