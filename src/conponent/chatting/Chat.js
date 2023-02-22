import React from 'react';
// import { useParams } from 'react-router-dom';
import Chatboard from './Chatboard';
import ChatLists from './ChatLists';

const Chat = () => {

    return (
        <div className='flex flex-row justify-center w-full bg-gray-300'>

            <ChatLists/>
            <div className='w-[65%]     ' > 
                <Chatboard/>
            </div>
            
        </div>
    );
};

export default Chat;