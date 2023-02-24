import React, { useEffect, useState } from 'react';
import {  json, useNavigate } from 'react-router-dom';

const Login = ({HandleUserLog,isLoggedin,user,setUser}) => {
    const navigate = useNavigate();

    const [loginSucced, setloginSucced] = useState(false)
        useEffect(() => {
        if(user){
            localStorage.setItem('userLoginData', JSON.stringify(user))
            navigate('/dashboard')
        }
        }, [user,loginSucced])
        

    const loginSubmit = e =>{
        
        e.preventDefault();
        if(!e.target.user.value){alert("Please submit the checkbox")}
        const tempUser = {
            email: e.target.email.value,
            password: e.target.password.value,
            user: e.target.user.value
        }
        console.log("Temp User-", tempUser)
        e.target.email.value = "";
        e.target.password.value = "";
        fetch(`http://localhost:5000/login/${tempUser.user}`,{
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-type': 'application/json', 
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(tempUser),
        })
            // .then(res => alert(res.status))
          .then((res) => res.json() )
          .then(userData => {
            console.log("user DAta from server", userData)
            if(userData){
                setUser(userData)
                setloginSucced(true)
                HandleUserLog(true)
                if(user){ 
                    navigate("/dashboard") ; 
                    console.log("user is true")
                }else{
                    console.log("user is false")
                }
                
            }
            else{
                console.log(userData)
                alert("Email or Password is not valid")
            }
        })
          .catch(e=> console.log("Error is", e))
        
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
                                <fieldset className='mb-8'>
                                    <legend>Choose Your Actor!</legend>
                                    <input id="student"  className="peer/student" type="radio" name="user" value={'student'}/>
                                    <label  htmlFor="student" className="peer-checked/student:text-[#e6c229] pr-5 pl-3">Student</label>
                                    <input id="tutor"  className="peer/tutor" type="radio" name="user" value={'tutor'}/>
                                    <label  htmlFor="tutor" className="peer-checked/tutor:text-[#e6c229] pl-3">Tutor</label>
                                </fieldset>
                                <input  type="submit" value={"login"} className='w-32 h-10 border-0 rounded font-semibold bg-button-bg text-black hover:bg-[#ddc660] hover:text-white cursor-pointer mt-5 ' />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }

export default Login;