
import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
    const contactHandle = e =>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.message.value)
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.message.value = '';
        alert("Sent Message Success");
    }
        return (
            <>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between container mx-auto">
                        <div className="grid flex-grow card bg-base-100 rounded-box justify-start items-start">
                            <div  className='p-20 text-2xl'>
                                <h2 className='text-[#e6c229]'>Address</h2>
                                <p>City University,Khagan,Savar</p>
                                <p>+0880123456789</p>
                                <p className='text-[#e6c229] pt-10 pb-5'>Follow Us</p>
                                <div className='inline-flex'>
                                <span className='pr-5'><FaFacebook /></span>
                                <span><FaInstagramSquare/></span>
                                </div>
                            </div>
                        </div>   
                        <div className='p-10 rounded-box shadow-2xl bg-slate-100'>
                            <form onSubmit={contactHandle}>
                                <h2 className='text-4xl text-teal-800 mb-10'>Contact Us</h2>
                                <div className="mb-3">
                                    <label className="form-label text-slate-800 pb-2" htmlFor="name">
                                         Your Name
                                    </label>
                                    <input className="form-control w-96 pl-5 py-2" type="text" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-slate-800 pb-2" htmlFor="email">
                                        Your Email
                                    </label>
                                    <input className="form-control w-96 pl-5 py-2" type="email" id="email" placeholder="Your email address"  required />
                                </div>
                                <div className="mb-3 text-slate-800">
                                    <label className="form-label pb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea className="form-control w-96 h-48  pl-5 py-2" id="message" placeholder="Your message"  required />
                                </div> 
                                <input className='btn-1' type="submit" value="Send Message" />    
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
};

export default Contact;