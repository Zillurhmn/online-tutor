import React, { useEffect, useState } from 'react';

const ChatData = ({showChat,newChatReqData,chatLists}) => {
    const [ChatData, setChatData] = useState(null)
    useEffect(()=>{
         console.log("Req for show", showChat)
         setChatData(showChat)
     },[newChatReqData,showChat,chatLists])

    return (
        <div className=' overflow-y-scroll h-[90%] m '>
            {
                ChatData && ChatData.chat?.map((ob,i)=>(
                    <div key={i} className='m-2 w-[50%] border p-3 bg-slate-800 text-white rounded-lg'>
                        <p className='text-xs font-bold'>{ob.name}</p>
                        <p>{ob.msg}</p>
                    </div>
                ))
            }
            {
                !ChatData && 
                    <div className='m-2 w-[50%] border p-3 bg-slate-800 text-white rounded-lg'>
                        <p className='text-xs font-bold'>Sorry</p>
                        <p>No msg to show</p>
                    </div>
            }           
        </div>
    );
};

export default ChatData;