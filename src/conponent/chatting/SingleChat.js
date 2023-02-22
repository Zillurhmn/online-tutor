import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChatData from './ChatData';

const SingleChat = () => {
    const navigate = useNavigate();
    const handleNewSingleChat =(e)=>{
        e.preventDefault();
        console.log(e.target.newmsg.value)
        navigate('/chats')
    }
    return (
        <div>
             <div className='m-3 border border-slate-900 rounded h-[80vh] p-2'>
                <div className=' overflow-y-scroll h-[80%] m '>
                    <div className='m-2 w-[50%] border p-3 bg-slate-800 text-white rounded-lg'>
                        <p className='text-xs font-bold'>Name Here</p>
                        <p>All Msg will be Here</p>
                    </div>
                </div> 
                <form onSubmit={handleNewSingleChat}>
                    <div className='h-[20%] w-full flex  items-end'>
                        <input type={'Text'} name='newmsg' className='w-[79%] m-1 p-2 rounded-md form-control bg-gray-600 text-white'/>
                        <button className='w-[20%] btn '>Sent</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SingleChat;