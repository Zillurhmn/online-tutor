
import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
    
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
                        <div>
                        <div className='p-10 rounded-box shadow-2xl'>
                        {/* <form >
                        <h2 className='text-4xl text-slate-100 mb-10'>Contact Us</h2>
                        <div className="mb-3">
                            <label className="form-label text-slate-100" htmlFor="name">
                                Name
                            </label>
                            <input className="form-control w-96 pl-5 py-2" type="text" id="name" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-slate-100" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control w-96 pl-5 py-2" type="email" id="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)}  required />
                        </div>
                        <div className="mb-3 text-slate-100">
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control w-96 pl-5 py-2" id="message" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)} required />
                        </div> 
                        <button className='btn-1' value="Clear Fields" onClick={submit}>Send Message</button>    
                    </form> */}
                     </div>
                        </div>
                    </div>
                </div>
            </>
        );
};

export default Contact;