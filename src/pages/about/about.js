import React from 'react';
import about1 from '../../images/about.png'
const about = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between container mx-auto">
                        <img src={about1} className="max-w-sm rounded-lg"/>
                        <div>
                            <h1 className='text-[#e6c229] font-bold text-4xl text-center pb-10'>About Us</h1>
                            <p className='text-lg'>Tutor Hunt is the first ever online tutor hiring platform in Bangladesh that will provide an online class system. Tutor hunt helps to connect with all kinds of students. We have features like live chat, online classes, and a payment system. Our goal is to solve education-related problems in the fastest way and create an easy way to solve problems for university students.</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default about;