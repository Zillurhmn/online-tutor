import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PostCard = ({obj,index,isLoggedin,user,tutorData,setTutorData}) => {

    const navigate = useNavigate();
    // const userObj = user?.user[0];
    // const actor = userObj.user;
    // const studentId = userObj?._id;

    const handleContactTutor = () => {
        setTutorData(obj);
        navigate(`/chats/${obj.tutorId}`)
    }
    
    
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
                        {obj.topicDescription && <p className="py-2 text-justify ">{obj.topicDescription}</p>}
                    </div>
                    <div className='flex gap-6' >
                        {
                            !isLoggedin &&  
                            <Link to={"/login"} className={'btn'}>Enroll Now</Link>
                        }
                        {
                            isLoggedin && (user?.user === "student")&& user&&
                            <a href={`http://localhost:5000/init/${obj._id}/${user?._id}`} className='btn'  >Enroll </a>
                        }
                        {
                            isLoggedin && (user?.user === "student")&& user&&
                            <button  className="btn-1" onClick={handleContactTutor}>Contact Tutor</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;