import React from 'react';
import ChatData from './ChatData';

const Chatboard = () => {
    return (
        <div className='m-3 border border-slate-900 rounded h-[70vh] p-2'>
            <ChatData/>
            <div className='h-[10%] w-full flex justify-center'>
                <input type={Text}  className='w-[79%] m-1 p-3 rounded-md form-control'/>
                <button className='w-[20%] btn '>Sent</button>
            </div>
        </div>
    );
};

export default Chatboard;