import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const Login = ({HandleUserLog,isLoggedin}) => {
    const navigate = useNavigate();

    const [loginSucced, setloginSucced] = useState(false)
    

    const loginSubmit = e =>{
        
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        e.target.email.value = "";
        e.target.password.value = "";
        
        setloginSucced(true);
        HandleUserLog(true);
        navigate("/dashboard")
        
    }
   
  return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-[#e6c229]">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={loginSubmit}>
                                <label htmlFor="email">Enter Email</label>
                                <br />
                                <input id="email" type="email" className="input input-bordered mb-5 mt-3" required placeholder='Email' />
                                <br />
                                <label htmlFor="pasword">Enter Password</label>
                                <br />
                                <input id='password' type="password"  className="input input-bordered mb-5 mt-3" suggested="current-password" required placeholder='Password'/>
                                <br />
                                <input  type="submit" value={"LogIn"} className='w-32 h-10 border-0 rounded font-semibold bg-button-bg text-black hover:bg-[#ddc660] hover:text-white cursor-pointer mt-5 ' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }

export default Login;