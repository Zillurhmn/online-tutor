import React from 'react';

const TutorPost = ({post,setDeletePost}) => {
    const id = post._id;
    const handleEditPost =()=>{
        alert("Request for Edit Post")
    }
    const handleDeletePost=()=>{
        alert("Request for Delete Post");
        fetch(`http://localhost:5000/Deletepost/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            } ,
        })
        .then((res) => res.json())
        .then((result) => setDeletePost(result))
    }

    return (
        <div className='bg-teal-50 m-5 p-5 shadow-lg w-[700px] min-h-[400px] flex flex-col justify-evenly'>
            <h3><span className=' font-bold'>Id:</span> {post?._id || "Title is not Defined"}</h3>
            <h3><span className=' font-bold'>Title:</span> {post?.topicName || "Title is not Defined"}</h3>
            <h3><span className=' font-bold'>Amount:</span> {post?.amount || "data is not Defined"}</h3>
            <h3><span className=' font-bold'>Time:</span> {post?.totalTime || "data is not Defined"} hour</h3>
            <h3><span className=' font-bold'>Tutor:</span> {post?.name || "data is not Defined"}</h3>
            <h3><span className=' font-bold'>Certified:</span> {post?.education || "data is not Defined"}</h3>
            <h3><span className=' font-bold'>Expertise:</span> {post?.subject || "data is not Defined"}</h3>
            <p><span className=' font-bold'>Description:</span> {post?.topicDescription || "data is not Defined"}</p>
            <div className='flex '>
                <button  onClick={handleEditPost} className='btn bg-blue-800 hover:bg-blue-900 mt-5 mr-5'>Edit Post</button>
                <button  onClick={handleDeletePost}  className='btn bg-red-600 hover:bg-red-900 mt-5'>Delete Post</button>
            </div>
        </div>
    );
};

export default TutorPost;