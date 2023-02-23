import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleChat = ({user,tutorData,setTutorData,isLoggedin}) => {
    const navigate = useNavigate();
    console.log("found tutor data", tutorData)
    console.log("found user data", user)

    const handleNewSingleChat =(e)=>{
        e.preventDefault();
        
        const msg = e.target.newmsg.value;
        // const tutorId= tutorData?.tutorId;
        // const tutorName = tutorData?.name;
        // const studentId = user._id;
        const userName = user.name;
        const newChat = {
            name:userName,
            msg:msg,
        }
        fetch(`http://localhost:5000/chat/${user._id}/${tutorData.tutorId}`,{
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-type': 'application/json', 
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(newChat),
        })
        .then((res) => res.json())
        .then( (result) => console.log("Get the chat response result",result))
        navigate('/chats')
    }
    return (
        <div className=' flex justify-around items-center flex-wrap lg:flex-nowrap'>
            <div className="hero-content flex flex-col w-[600px] shadow-md bg-gray-100 p-10 rounded-lg">
                <div className='flex flex-col justify-center'>
                    <div className='flex justify-between'>
                        {tutorData.topicName && <h1 className="text-3xl font-bold text-[#e6c229]">{tutorData.topicName}</h1>}
                        {tutorData.amount && <h1 className='text-xl font-bold py-1'>{tutorData.amount}</h1>}
                    </div>

                    {tutorData.name && <h1 className='text-lg py-1'>{tutorData.name}</h1>}
                    {tutorData.education && <h1 className='text-sm py-1'>{tutorData.education}</h1>}
                    {tutorData.subject && <h1 className='text-sm py-1'><span className='font-bold '>Expertise: </span>{tutorData.subject}</h1>}
                    {tutorData.topicDescription && <p className="py-2 text-justify ">{tutorData.topicDescription}</p>}
                    
                    <div className='flex gap-40'>
                        {tutorData.amount && <h1 className='text-sm py-1'><span className='font-bold '> Total Fee: </span>{tutorData.amount}</h1>}
                        {tutorData.totalTime && <h1 className='text-sm py-1'><span className='font-bold '>Total time: </span>{tutorData.totalTime}</h1>}
                    </div>
                    <h1 className='py-1 font-bold '>Review: </h1>
                    <div>
                    {   tutorData.enroll &&
                        tutorData.enroll.map(obj=> (
                            obj.review.length >3 &&
                            <div className='m-2 p-2 shadow-lg bg-slate-300 rounded-lg'>
                                <h1 className='text-xs font-bold'>{obj?.name}</h1>
                                <h1>{obj?.review}</h1>
                            </div>
                        ))
                    }
                    </div>
                    
                </div>
            </div>
             <div className='m-3 w-[30%] border border-slate-900 rounded-lg h-[55vh] p-2'>
             

                <div className=' overflow-y-scroll h-[85%] mb-2 '>
                    <div className='m-2 w-[50%] border p-3 bg-slate-800 text-white rounded-lg'>
                        <p className='text-xs font-bold'>Tutor: {tutorData?.name}</p>
                        <p> Subject: {tutorData?.topicName}</p>
                        <p> Cost: {tutorData?.amount} /-</p>
                        <p> Total time: {tutorData?.totalTime} hour</p>
                        <p> Are you Interested!</p>
                    </div>
                </div> 
                <form onSubmit={handleNewSingleChat}>
                    <div className='h-[15%] w-full flex  items-end'>
                        <input type='text' name='newmsg' defaultValue={"Hello, I am interested. Can you explain ?"} className='w-[79%] m-1 p-2 rounded-md form-control bg-gray-600 text-white'/>
                        {
                            isLoggedin && <button className='w-[20%] btn'>Sent</button>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SingleChat;