import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleChat = ({user,tutorData,setTutorData}) => {
    const navigate = useNavigate();
    console.log("found tutor data", tutorData)
    console.log("found user data", user)

    const handleNewSingleChat =(e)=>{
        e.preventDefault();
        const msg = e.target.newmsg.value;
        const tutorId= tutorData?.tutorId;
        const tutorName = tutorData?.name;
        const userId = user._id;
        const userName = user.name;
        const newChat = {
            tutorId : tutorId,
            tutorName: tutorName,
            studentId:userId,
            studentName:userName,
            studentMsg:msg,
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
        <div className=' flex justify-center items-center'>
             <div className='m-3 w-[60%] border border-slate-900 rounded h-[55vh] p-2'>
                <div className=' overflow-y-scroll h-[80%] m '>
                    <div className='m-2 w-[50%] border p-3 bg-slate-800 text-white rounded-lg'>
                        <p className='text-xs font-bold'>Tutor: {tutorData?.name}</p>
                        <p> Subject: {tutorData?.topicName}</p>
                        <p> Cost: {tutorData?.amount} /-</p>
                        <p> Total time: {tutorData?.totalTime} hour</p>
                        <p> Are you Interested!</p>
                    </div>
                </div> 
                <form onSubmit={handleNewSingleChat}>
                    <div className='h-[20%] w-full flex  items-end'>
                        <input type='text' name='newmsg' defaultValue={"Hello, I am interested. Can you explain ?"} className='w-[79%] m-1 p-2 rounded-md form-control bg-gray-600 text-white'/>
                        <button className='w-[20%] btn'>Sent</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SingleChat;