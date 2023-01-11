import React, { useState } from 'react';
import Navbar from '../../conponent/Navbar/navbar';
import Footer from '../../conponent/Footer/footer';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submit] = useState('');
    return (
        <>
        <Navbar/>
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#e6c229]">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label" htmlFor="email">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" id="email" className="input input-bordered" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-control">
                    <label className="label" htmlFor="password">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" id="password" className="input input-bordered" value={password} onChange={e => setPassword(e.target.value)} required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="log" value="Clear" onClick={submit} >Login</button>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <Footer/>
            </>
    );
};

export default Login;