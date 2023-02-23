import React, { useEffect, useState } from 'react';
import Chatboard from './Chatboard';
import ChatLists from './ChatLists';

const Chat = ({user}) => {
    const [chatLists, setChatLists] = useState(null)
    const [showChat, setShowChat] = useState(null)
    const [newChatReqData, setNewChatReqData] = useState(null)
    const [getTutorChatlists, setGetTutorChatlists] = useState(null)

    useEffect(()=>{
        if(user.user === 'student'){
            fetch(`http://localhost:5000/chat/student/${user._id}`,{
                method: 'GET',
                headers: { 
                    'Content-type': 'application/json', 
                }
            })
            .then((res) => res.json())
            .then(data=>{ 
                console.log(" Student chatting Data",data);
                setChatLists(data)
            })
        }
        if(user.user==='tutor'){
            fetch(`http://localhost:5000/chat/tutor/${user._id}`,{
                method: 'GET',
                headers: { 
                    'Content-type': 'application/json', 
                }
            })
            .then((res) => res.json())
            .then(data=>{ 
                console.log(" tutor chatting Data",data);
                setChatLists(data)
            })
        }
    },[newChatReqData])
    // useEffect(()=>{
    //     // console.log("found tutors msg data",getTutorChatlists)
    //     getTutorChatlists.map(user=>{
    //         user.chats.map(tutorObj=>{
    //             if(tutorObj.tutorId === user._id){
    //                 console.log("found tutors msg",tutorObj)
    //             }
    //         })
    //     })
    // },[getTutorChatlists])
    return (
        <div className='flex flex-row justify-center w-full bg-gray-300'>
            <ChatLists chatLists={chatLists} setShowChat={setShowChat} newChatReqData={newChatReqData} />
            <div className='w-[65%] ' > 
                <Chatboard showChat={showChat} user={user} chatLists={chatLists} setNewChatReqData={setNewChatReqData} newChatReqData={newChatReqData}/>
            </div>
        </div>
    );
};

export default Chat;