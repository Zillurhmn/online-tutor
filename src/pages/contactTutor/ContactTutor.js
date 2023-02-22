import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

    const ContactTutor = ({Allposts}) => {
    const navigate = useNavigate();
    const {postId} = useParams();
    const obj = Allposts.find(obj=> obj._id === postId);
    // console.log("Object is ",obj)

    const handleTutorProfile = ()=>{
        navigate("/")
    }
    return (
        <div>
            <div className="hero-content flex flex-col">
                <div className='flex flex-col justify-center'>
                    <div className='flex justify-between'>
                        {obj.topicName && <h1 className="text-3xl font-bold text-[#e6c229]">{obj.topicName}</h1>}
                        {obj.amount && <h1 className='text-xl font-bold py-1'>{obj.amount}</h1>}
                    </div>

                    {obj.name && <h1 className='text-lg py-1'>{obj.name}</h1>}
                    {obj.education && <h1 className='text-sm py-1'>{obj.education}</h1>}
                    {obj.subject && <h1 className='text-sm py-1'><span className='font-bold '>Expertise: </span>{obj.subject}</h1>}
                    {obj.topicDescription && <p className="py-2 text-justify ">{obj.topicDescription}</p>}
                    
                    <div className='flex gap-40'>
                        {obj.amount && <h1 className='text-sm py-1'><span className='font-bold '> Total Fee: </span>{obj.amount}</h1>}
                        {obj.totalTime && <h1 className='text-sm py-1'><span className='font-bold '>Total time: </span>{obj.totalTime}</h1>}
                    </div>
                    {obj.review && <h1 className='text-sm py-1'><span className='font-bold '>Review: </span>{obj.review}</h1>}
                    <div className='flex gap-6 mt-5' >
                        <button  className="btn-1" >Enroll Now</button>
                        <button  className="btn-1" onClick={handleTutorProfile} >View Tutor Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactTutor;