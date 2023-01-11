import React,{useState} from 'react';
import Navbar from '../../conponent/Navbar/navbar';
import Footer from '../../conponent/Footer/footer';

const Signup = () => {
    const [show, setShow] = useState(true)
    const [submit] = useState('');
    return (
        <>
            <Navbar/>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                <div className="pl-5 text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-[#e6c229]">Sign Up Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
           
                    <div className="p-10 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='w-full max-w-sm '>

                                <fieldset>
                                        <legend>Choose Your Actor!</legend>

                                        <input id="student" class="peer/student" type="radio" name="status"/>
                                        <label onClick={()=>setShow(false)} for="student" class="peer-checked/student:text-[#e6c229] pr-5 pl-3">Student</label>

                                        <input id="tutor" class="peer/tutor" type="radio" name="status" />
                                        <label onClick={()=>setShow(true)} for="tutor" class="peer-checked/tutor:text-[#e6c229] pl-3">Tutor</label>

                                </fieldset>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">First Name</span>
                                        </label>
                                        <input type="text" placeholder="first name" className="input input-bordered" required />
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input type="text" placeholder="last name" className="input input-bordered"  required/>
                            </div>
                            {
                                show?
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">NID</span>
                                    </label>
                                    <input type="text" placeholder="NID" className="input input-bordered" required />
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" placeholder="subject" className="input input-bordered" required/>
                                </div>:null
                            }
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered" required/>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button value="Clear Fields" className="log" onClick={submit}>Sign Up</button>
                                    </div>
                                </div>
                            
                                            </div>
                                        </div>
                                </div>

                <Footer/>

            </>
    );
};

export default Signup;