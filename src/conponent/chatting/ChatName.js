import React, { useEffect } from 'react';

const ChatName = ({data,setShowChat,newChatReqData}) => {
    const handleShowChat = ()=>{
        setShowChat(data);
    }
    useEffect(()=>{},[newChatReqData])
    return (
        <div onClick={handleShowChat} className='p-3  rounded text-xl font-bold p shadow-xl m-2
        bg-gray-200 hover:bg-gray-400 transition ease-in-out hover:cursor-pointer'>
            {data && data.tutorName}
            <p className='text-xs '>{data.chat[data.chat.length - 1]?.name}:  
            <span className=' font-light'>{data.chat[data.chat.length - 1]?.msg } </span></p>
        </div>
    );
};

export default ChatName;