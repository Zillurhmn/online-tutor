import React, { useState } from 'react';
import Navbar from '../../conponent/Navbar/navbar';
import Footer from '../../conponent/Footer/footer';
import { useNavigate } from 'react-router-dom';
// import { setUser } from './loginSlice'
const Login = () => {
    
    // const navigate = useNavigate()
//   const login = useSelector((state) => state.login.user)
//   const dispatch = useDispatch()

  return (
        <>
        {/* <Navbar/> */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-[#e6c229]">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form >
                                <input type="email" className="input input-bordered mb-5 mt-3" />
                                <input type="password" required className="input input-bordered mb-5 mt-3" />
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