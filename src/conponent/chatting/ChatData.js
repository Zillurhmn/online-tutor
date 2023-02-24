import React, { useEffect, useState } from 'react';

const ChatData = ({showChat,newChatReqData,chatLists}) => {
    console.log("showchat ",showChat)
    console.log("chatList ",chatLists)
    return (
        <div className=' overflow-y-scroll h-[90%] m '>
            {
                // showChat && showChat.chat?.map((ob,i)=>(
                //     <div key={i} className='m-2 w-[50%] border p-3 bg-slate-800 text-white rounded-lg'>
                //         <p className='text-xs font-bold'>{ob.name}</p>
                //         <p>{ob.msg}</p>
                //     </div>
                // ))
            }
            {
                showChat && chatLists.map(singleChat => {
                    const chat = singleChat;
                    return (
                        (chat.tutorId === showChat.tutorId && chat.studentId === showChat.studentId) &&
                            chat.chat.map((ob,i)=>{
                                return(
                            <div key={i} className='m-2 w-[50%] border p-3 bg-slate-800 text-white rounded-lg'>
                                <p className='text-xs font-bold'>{ob.name}</p>
                                <p>{ob.msg}</p>
                            </div>) 
                        }
                ))})
            }

            {
                !showChat && 
                    <div className='m-2 w-[50%] border p-3 bg-slate-800 text-white rounded-lg'>
                        <p className='text-xs font-bold'>Sorry</p>
                        <p>No msg to show</p>
                    </div>
            }           
        </div>
    );
};

export default ChatData;