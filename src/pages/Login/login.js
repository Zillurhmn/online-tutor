import React, { useState } from 'react';
import Navbar from '../../conponent/Navbar/navbar';
import Footer from '../../conponent/Footer/footer';
import { useForm } from 'react-hook-form';
import { getData } from '../../conponent/lib/baseService';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../feature/login/loginSlice';
import { useNavigate } from 'react-router-dom';
// import { setUser } from './loginSlice'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submit] = useState('');
    const [student,setStudent] = useState();
    const navigate = useNavigate()
    const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const login = useSelector((state) => state.login.user)
  const dispatch = useDispatch()

     const onSubmit=(data)=>{
       
    //     Cookies.set("role", res?.data?.role, { expires: 1 }),
    //     Cookies.set("email", res?.data?.email, { expires: 1 }),
    //     Cookies.set("name", res?.data?.name, { expires: 1 }),
    //     Cookies.set("expiry", res?.data?.expiry);
    //   navigate("/", { replace: true });
// console.log("my form data is = ",data);
const res = getData(`studentlogin?email=${data?.email}&password=${data?.password}`);
 res.then(data => {
    setStudent(data.data)
    dispatch(setUser(data.data))
    
    navigate('/')
        // console.log("my login response is ", data);
    })
    .catch(error => {
       console.log("error");
    });

    if(student.length>0){
        Cookies.set("token", student.id, { expires: 1 })
    }
reset();


  }
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className=''>Enter Your Email:</label>
                                    <input type="email" {...register("email",{ required: true}) }  className="input input-bordered mb-5 mt-3" />
                                   
                                     <label className=''>Enter Your Password:</label>
                                    <input type="password" {...register("password")} required className="input input-bordered mb-5 mt-3" />
                                  
                                    <input  type="submit" value={"LogIn"} className='w-32 h-10 border-0 rounded font-semibold bg-button-bg text-black hover:bg-[#ddc660] hover:text-white cursor-pointer mt-5 ' />
                                    </form>
                    {/* <div className="form-control">
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
                    </div> */}
                </div>
            </div>
        </div>
            </div>
            {/* <Footer/> */}
            </>
    );
};

export default Login;