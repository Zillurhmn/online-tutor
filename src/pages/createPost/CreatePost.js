import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({user,newPost,setNewPost}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!user){
            navigate('/')
        }
      
    }, [])
    
    // const obj = user[0];
    const handleNewPost = (e)=>{
        e.preventDefault();
        let topicName = e.target.topicName.value;
        let totalTime = e.target.totalTime.value;
        let amount = e.target.amount.value;
        let topicDescription = e.target.topicDescription.value;
        let keyword = e.target.keyword.value;

        const NewPostObj = {
            topicName : topicName,
            totalTime : totalTime,
            amount : amount,
            topicDescription: topicDescription,
        }
        console.log(NewPostObj)

        fetch(`http://localhost:5000/CreatePost`,{
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-type': 'application/json', 
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(NewPostObj),
        })
            .then((res) => res.json())
            .then(userData => {
                // setUser( [userData])
                console.log("new user", userData)
                
                // HandleUserLog(true)
                // navigate("/dashboard")
            })
          .catch(e=> alert("Error is", e))



        e.target.topicName.value = "";
        e.target.totalTime.value = "";
        e.target.amount.value = "";
        e.target.topicDescription.value = "";
        e.target.keyword.value = "";


    }
    return (
        <div className='flex align-center justify-center  bg-gray-200'>
            <div className="card  w-full max-w-sm shadow-2xl m-32 ">
                <div className="card-body bg-white rounded">
                    <h1 className='text-center font-bold '>Create New Post </h1>
                    <form onSubmit={handleNewPost} >
                        <input placeholder={"Title"} name='topicName'  type="text" className="input input-bordered mb-5 mt-3 w-[90%]" required  />
                        <br />
                        <input type="text" placeholder={"Total Time"} name='totalTime'  className="input input-bordered mb-5 mt-3 w-[90%]" required />
                        <br />
                        <input type="text" placeholder={"Price"} name='amount'  className="input input-bordered mb-5 mt-3 w-[90%]"  required />
                        <br />
                        <input type="text" placeholder={"Keyword"} name={'keyword'}  className="input input-bordered mb-5 mt-3 w-[90%]"  required />
                        <br />
                        <textarea name='topicDescription' placeholder="Enter Post Description" className='border p-2 text-gray-600 rounded-lg w-[90%]' id="description" cols="30" rows="10" required></textarea>
                        <input  type="submit" value={"Submit Post"} className='w-32 h-10 border-0 rounded font-semibold bg-button-bg text-black hover:bg-[#ddc660] hover:text-white cursor-pointer mt-5 ' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;