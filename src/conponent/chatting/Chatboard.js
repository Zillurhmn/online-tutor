import React from 'react';
import ChatData from './ChatData';

const Chatboard = ({showChat,user,setNewChatReqData,newChatReqData,chatLists}) => {
    const handleNewMsg =(e)=>{
        e.preventDefault();
        const msg = e.target.newText.value; 
        const name = user?.name;
        const msgObj = {
            name:name,
            msg:msg
        };
        if(user.user==="student"){
            fetch(`http://localhost:5000/chat/student/${user._id}/${showChat.tutorId}`,{
                method: 'POST',
                headers: { 
                    'Accept': 'application/json',
                    'Content-type': 'application/json', 
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(msgObj),
            })
            .then((res) => res.json())
            .then( (result) => setNewChatReqData(result))
        }
        if(user.user === 'tutor'){
            console.log("tutor is true")
            fetch(`http://localhost:5000/chat/tutor/${user._id}/${showChat.studentId}`,{
                method: 'POST',
                headers: { 
                    'Accept': 'application/json',
                    'Content-type': 'application/json', 
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(msgObj),
            })
            .then((res) => res.json())
            .then( (result) => setNewChatReqData(result))
        }
        
        e.target.newText.value = "";
    }
    return (
        <div className='m-3 border border-slate-900 rounded h-[70vh] p-2'>
            <ChatData showChat={showChat} newChatReqData={newChatReqData} chatLists={chatLists}/>
            <form onSubmit={handleNewMsg}>
                 <div className='h-[10%] w-full flex justify-center items-center'>
                    <input type='text' name='newText'  className='w-[79%] m-1 p-3 rounded-md form-control'/>
                    <button type='submit' className='w-[20%] btn ' disabled={(showChat)?false:true}>Sent</button>
                </div>
            </form>
        </div>
    );
};

export default Chatboard;