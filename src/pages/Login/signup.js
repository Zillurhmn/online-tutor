import React,{useState} from 'react';
import Navbar from '../../conponent/Navbar/navbar';
import Footer from '../../conponent/Footer/footer';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

const Signup = () => {
  
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="pl-5 text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-[#e6c229]">Sign Up Now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="p-10 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className='w-full max-w-sm '>
                            <fieldset className='mb-8'>
                                    <legend>Choose Your Actor!</legend>

                                    <input id="student" class="peer/student" type="radio" name="status"/>
                                    <label onClick={()=>console.log("student")} for="student" class="peer-checked/student:text-[#e6c229] pr-5 pl-3">Student</label>

                                    <input id="tutor" class="peer/tutor" type="radio" name="status" />
                                    <label onClick={()=>console.log('tutor')} for="tutor" class="peer-checked/tutor:text-[#e6c229] pl-3">Tutor</label>

                            </fieldset>
                            <form >
                                <label className=''>Enter Your Full Name:</label>
                                <input type="text"   className="input input-bordered mb-5 mt-3" />
                                <label className=''>Enter Your Email:</label>
                                <input type="email"  required className="input input-bordered mb-5 mt-3" />
                                <label className=''>Enter Your Password:</label>
                                <input type="password"  required className="input input-bordered mb-5 mt-3" />
                                <label className=''>Confirm Password:</label>
                                <input type="password" required className="input input-bordered mb-5 mt-3" />
                                <input  type="submit" className='w-32 h-10 border-0 rounded font-semibold bg-button-bg text-black hover:bg-[#ddc660] hover:text-white cursor-pointer mt-5 ' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;