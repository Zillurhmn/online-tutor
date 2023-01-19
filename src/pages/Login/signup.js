import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({HandleUserLog,isLoggedin ,user,setUser}) => {
    const navigate = useNavigate();
    // if(isLoggedin){navigate('/dashboard')}
    
    const [tutor , setTutor] = useState(false)
   

    const handleRegister = (e)=>{
        e.preventDefault();
        const status = e.target.status.value 
        const name = e.target.name.value 
        const email = e.target.email.value 
        const password = e.target.password.value 
        const confirmedPassword = e.target.confirmedPassword.value
        let tempUser = {}
        if(password === confirmedPassword && status){
            if (status === 'tutor' ){
                const subject = e.target.subject.value
                 tempUser= {
                    name: name,
                    email: email,
                    password: password,
                    user: status,
                    subject: subject ,
                }
            }else{
                 tempUser= {
                    name: name,
                    email: email,
                    password: password,
                    user: status,
                }
            }
            console.log("new User data", tempUser);
            fetch(`http://localhost:5000/newUser/${tempUser.user}`,{
                method: 'POST',
                headers: { 
                    'Accept': 'application/json',
                    'Content-type': 'application/json', 
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(tempUser),
            })
                .then((res) => res.json())
                .then(userData => {
                    setUser( [userData])
                    console.log("new user", userData)
                    
                    HandleUserLog(true)
                    navigate("/dashboard")
                })
              .catch(e=> console.log("Error is", e))
              
        }else{
            alert("Fill out full details || Password didn't Match! Try again")
        }
    }
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
                            <form onSubmit={handleRegister}>
                                <fieldset className='mb-8'>
                                    <legend>Choose Your Actor!</legend>
                                    <input id="student" onClick={()=>setTutor(false)} className="peer/student" type="radio" name="status" value={'student'}/>
                                    <label  htmlFor="student" className="peer-checked/student:text-[#e6c229] pr-5 pl-3">Student</label>
                                    <input id="tutor" onClick={()=>setTutor(true)} className="peer/tutor" type="radio" name="status" value={'tutor'}/>
                                    <label  htmlFor="tutor" className="peer-checked/tutor:text-[#e6c229] pl-3">Tutor</label>
                                </fieldset>
                                <label >Enter Your Full Name:</label>
                                <br />
                                <input type="text" name='name' placeholder='Name'  className="input input-bordered mb-5 mt-3" required/>
                                <br />
                                {
                                    tutor && 
                                    <>
                                        <label >Expertise Subject:</label>
                                        <br />
                                        <input type="text" name='subject' placeholder='Subject'  className="input input-bordered mb-5 mt-3" required/>
                                        <br />
                                    </>
                                }
                                
                                <label >Enter Your Email:</label>
                                <br />
                                <input type="email" name='email' placeholder='Email' required className="input input-bordered mb-5 mt-3" />
                                <br />
                                <label >Enter Your Password:</label>
                                <br />
                                <input type="password" name='password' placeholder='Password' required  className="input input-bordered mb-5 mt-3" />
                                <br />
                                <label >Confirm Password:</label>
                                <br />
                                <input type="password" name='confirmedPassword' placeholder='Confirm Password'  className="input input-bordered mb-5 mt-3" required/>
                                <br />
                                <input   type="submit" className='w-32 h-10 border-0 rounded font-semibold bg-button-bg text-black hover:bg-[#ddc660] hover:text-white cursor-pointer mt-5 ' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;