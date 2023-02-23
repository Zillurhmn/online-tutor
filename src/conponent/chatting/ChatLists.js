import React from 'react';
import ChatName from './ChatName';

const ChatLists = ({chatLists,setShowChat,newChatReqData}) => {
    
    return (
        <div>
             <div className='w-[350px]  flex flex-col  h-[70vh] overflow-y-scroll'> 
             {
                chatLists && chatLists.map(chat=>(
                        <ChatName data={chat} setShowChat={setShowChat} newChatReqData={newChatReqData} />
                    ))
             }
             {
                !chatLists && <div>No Msg!</div>
             }
            </div>
        </div>
    );
};

export default ChatLists;