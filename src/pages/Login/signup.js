import React,{useState} from 'react';
import Navbar from '../../conponent/Navbar/navbar';
import Footer from '../../conponent/Footer/footer';
import { useForm } from 'react-hook-form';
import { postData } from '../../conponent/lib/baseService';
import { useHistory } from "react-router-dom";

const Signup = () => {
    // const history = useHistory()
    const [show, setShow] = useState(true)
    const [submit] = useState('');
    const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors },
  } = useForm();
  {
    // resolver: yupResolver(validationSchema),
  }
  

  const onSubmit=(data)=>{
// console.log("my form data is = ",data);
if(data.password === data.confirmPassword){
    // console.log("success");
     const {fullName,email,password} = data;
     const myData = {
        fullName,email,password
     }
    //  console.log("my data is = ",myData);
     postData("students",myData)
     reset();
    //  history.push("/login")
}else{
    console.log("enter valid password");
}
  }
    return (
        <>
            {/* <Navbar/> */}
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
                                        <label onClick={()=>setShow(false)} for="student" class="peer-checked/student:text-[#e6c229] pr-5 pl-3">Student</label>

                                        <input id="tutor" class="peer/tutor" type="radio" name="status" />
                                        <label onClick={()=>setShow(true)} for="tutor" class="peer-checked/tutor:text-[#e6c229] pl-3">Tutor</label>

                                </fieldset>

                                 <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className=''>Enter Your Full Name:</label>
                                    <input type="text" {...register("fullName",{ required: true }) }  className="input input-bordered mb-5 mt-3" />
                                     <label className=''>Enter Your Email:</label>
                                    <input type="email" {...register("email")} required className="input input-bordered mb-5 mt-3" />
                                     <label className=''>Enter Your Password:</label>
                                    <input type="password" {...register("password")} required className="input input-bordered mb-5 mt-3" />
                                    <label className=''>Confirm Password:</label>
                                    <input type="password" {...register("confirmPassword")} required className="input input-bordered mb-5 mt-3" />
                                    <input  type="submit" className='w-32 h-10 border-0 rounded font-semibold bg-button-bg text-black hover:bg-[#ddc660] hover:text-white cursor-pointer mt-5 ' />
                                    </form>

                                    {/* <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">First Name</span>
                                        </label>
                                        <input type="text" placeholder="first name" className="input input-bordered" required />
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input type="text" placeholder="last name" className="input input-bordered"  required/>
                            </div> */}
                            {/* {
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
                            } */}
                                    {/* <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" required />
                                    </div> */}
                                    {/* <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered" required/>
                                    </div> */}
                                    {/* <div className="form-control mt-6">
                                        <button value="Clear Fields" className="log" onClick={submit}>Sign Up</button>
                                    </div> */}
                                </div>
                            
                                            </div>
                                        </div>
                                </div>

                {/* <Footer/> */}

            </>
    );
};

export default Signup;