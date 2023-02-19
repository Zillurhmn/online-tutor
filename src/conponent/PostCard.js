import React from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';

const PostCard = ({obj,index,isLoggedin}) => {
    const navigate = useNavigate();
    const handleContactTutor = () => {
        
        navigate(`/contact/tutor/${obj._id}`)
    }
    // const handleEnrollPayment=() => {
    //     console.log("Button Clicked for enroll")
    //     fetch("http://localhost:5000/init",{
    //         method: 'GET',
    //         // mode: 'cors', 
    //         headers: {
    //         'Content-Type': 'application/json'
    //         } ,
    //     })
    //     .then((res) => res.json())
    //     .then( (result) => console.log(result))
    //     // navigate('localhost:5000/init')
    // }
    

    
    return (
        <div>
            <div key={index} className="hero m-4 w-[300px] bg-base-200 rounded-2xl shadow-md">
                        <div className="hero-content flex flex-col">
                            <div className='flex flex-col justify-center'>
                                {obj.topicName && <h1 className="text-xl font-bold text-[#e6c229]">{obj.topicName}</h1>}
                                {obj.name && <h1 className='text-sm py-1'><span className='font-bold '>Tutor: </span> {obj.name}</h1>}
                                {obj.education && <h1 className='text-sm py-1'><span className='font-bold '>Completed: </span>{obj.education}</h1>}
                                {obj.subject && <h1 className='text-sm py-1'><span className='font-bold '>Expertise: </span>{obj.subject}</h1>}
                                {obj.amount && <h1 className='text-sm py-1'><span className='font-bold '> Total Fee: </span>{obj.amount}</h1>}
                                {obj.totalTime && <h1 className='text-sm py-1'><span className='font-bold '>Total time: </span>{obj.totalTime}</h1>}
                               {obj.review && <h1 className='text-sm py-1'><span className='font-bold '>Review: </span>{obj.review}</h1>}
                                {obj.topicDescription && <p className="py-2 text-justify ">{obj.topicDescription}</p>}
                            </div>
                            <div className='flex gap-6' >
                                {/* <button  className="btn-1" onClick={handleEnrollPayment}>Enroll Now</button> */}
                                {
                                    !isLoggedin &&  
                                    <Link to={"/login"} className={'btn'}>Enroll </Link>
                                }
                                {
                                    isLoggedin &&
                                    <a href='http://localhost:5000/init' className='btn'  >Enroll </a>
                                }
                                <button  className="btn-1" onClick={handleContactTutor}>Contact Tutor</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default PostCard;