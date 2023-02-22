import React from 'react';

const Chat = () => {
    return (
        <div className='flex flex-row justify-center w-full bg-gray-300'>
            <div className='w-[350px]  flex flex-col'> 
                <div className='p-3 border rounded text-xl font-bold p shadow-xl m-2 bg-gray-200 hover:bg-gray-400 transition ease-in-out '>Name sdfs</div>
                <div className='p-3 border rounded text-xl font-bold p shadow-xl m-2 bg-gray-200 hover:bg-gray-400 transition ease-in-out '>Name sdfs</div>
                <div className='p-3 border rounded text-xl font-bold p shadow-xl m-2 bg-gray-200 hover:bg-gray-400 transition ease-in-out '> Namesdfs</div>
                <div className='p-3 border rounded text-xl font-bold p shadow-xl m-2 bg-gray-200 hover:bg-gray-400 transition ease-in-out '>Name sdfs</div>
                <div className='p-3 border rounded text-xl font-bold p shadow-xl m-2 bg-gray-200 hover:bg-gray-400 transition ease-in-out '> Namesdfs</div>
            </div>
            <div className='w-[65%] border' > chats</div>
            
        </div>
    );
};

export default Chat;