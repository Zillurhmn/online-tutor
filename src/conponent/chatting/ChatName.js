import React, { useEffect } from 'react';

const ChatName = ({data,setShowChat,newChatReqData,user}) => {
    const handleShowChat = ()=>{
        setShowChat(data);
    }
    useEffect(()=>{},[newChatReqData])
    return (
        <div onClick={handleShowChat} className='p-3  rounded text-xl font-bold p shadow-xl m-2
        bg-gray-200 hover:bg-gray-400 transition ease-in-out hover:cursor-pointer'>
            {
                (user.user === "student")  && data && data.tutorName
            }
            {
                (user.user === "tutor") && data && data.studentName
            }
            <p className='text-xs '>{data.chat[data.chat.length - 1]?.name}:  
            <span className=' font-light'>{data.chat[data.chat.length - 1]?.msg } </span></p>
        </div>
    );
};

export default ChatName;