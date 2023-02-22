import React, { useEffect } from 'react';

const ChatData = () => {
    useEffect(() => {
        // ---------scroll to bottom on page load---------------------------------------------
                // window.scrollTo({top: 100, left: 0, behavior: 'smooth'});
                
              }, []);
    return (
        <div className=' overflow-y-scroll h-[90%] m '>
            <div className='m-2 w-[50%] border p-3 bg-slate-800 text-white rounded-lg'>
                <p className='text-xs font-bold'>Name Here</p>
                <p>All Msg will be Here</p>
            </div>
            <div className='m-2 w-[50%] border p-3 bg-slate-700 text-white rounded-lg'>
                <p className='text-xs font-bold'>Name Here</p>
                <p>All Msg will be Here</p>
            </div>
            <div className='m-2 w-[50%] border p-3 bg-slate-800 text-white rounded-lg'>
                <p className='text-xs font-bold'>Name Here</p>
                <p>All Msg will be Here</p>
            </div>
            <div className='m-2 w-[50%] border p-3 bg-slate-700 text-white rounded-lg'>
                <p className='text-xs font-bold'>Name Here</p>
                <p>All Msg will be Here</p>
            </div>
            <div className='m-2 w-[50%] border p-3 bg-slate-700 text-white rounded-lg'>
                <p className='text-xs font-bold'>Name Here</p>
                <p>All Msg will be Here</p>
            </div>
            <div className='m-2 w-[50%] border p-3 bg-slate-800 text-white rounded-lg'>
                <p className='text-xs font-bold'>Name Here</p>
                <p>All Msg will be Here</p>
            </div>
            <div className='m-2 w-[50%] border p-3 bg-slate-800 text-white rounded-lg'>
                <p className='text-xs font-bold'>Name Here</p>
                <p>All Msg will be Here</p>
            </div>
            <div className='m-2 w-[50%] border p-3 bg-slate-800 text-white rounded-lg'>
                <p className='text-xs font-bold'>Name Here</p>
                <p>All Msg will be Here</p>
            </div>
        </div>
    );
};

export default ChatData;