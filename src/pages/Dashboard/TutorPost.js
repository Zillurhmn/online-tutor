import React, { useState } from 'react';
import EditPost from './EditPost';

const TutorPost = ({post,setDeletePost,setUpdatePost}) => {
    const [isEdit, setIsEdit] = useState(false);
    const id = post._id;
    const handleEditPost =()=>{
        alert("Request for Edit Post")
        setIsEdit(true)
    }
    const handleDeletePost=()=>{
        alert("Are you sure for Delete this Post");
        fetch(`http://localhost:5000/Deletepost/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            } ,
        })
        .then((res) => res.json())
        .then((result) => setDeletePost(result))
    }
    //========================Update post--------------------------------Edit post--------------
    const handleupdatePost = (e)=> {
        const obj = post;
        e.preventDefault();
        const topicName = e.target.topicName.value;
        const totalTime = e.target.totalTime.value;
        const amount = e.target.amount.value;
        const topicDescription = e.target.topicDescription.value;
        const keyword = e.target.keyword.value;
        const meetingLink = e.target.meetingLink.value;
        // const tutorId = obj._id ;
        // const name = obj.name;
        // const education = obj.education;
        // const subject = obj.subject;
        const editPost = {
            topicName : topicName,
            totalTime : totalTime,
            amount : amount,
            topicDescription: topicDescription,
            keyword:keyword,
            meetingLink:meetingLink,
            // tutorId:tutorId,
            // name:name,
            // education:education,
            // subject:subject,
        }
        const url = `http://localhost:5000/editpost/${id}`
        console.log("Fetching URL is",url)
         fetch(url,{
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-type': 'application/json', 
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(editPost),
        })
            .then((res) => res.json())
            .then(EditedPost => {
                setUpdatePost(EditedPost)
            })
          .catch(e=> console.log("Error is", e))

        console.log(editPost)
        setIsEdit(false)

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
            <h3><span className=' font-bold'>Meeting Link:</span> {post?.meetingLink || "Link is not Defined"}</h3>
            <p><span className=' font-bold'>Description:</span> {post?.topicDescription || "data is not Defined"}</p>
            <div className='flex '>
                <button  onClick={handleEditPost} className='btn bg-blue-800 hover:bg-blue-900 mt-5 mr-5'>Edit Post</button>
                <button  onClick={handleDeletePost}  className='btn bg-red-600 hover:bg-red-900 mt-5'>Delete Post</button>
            </div>
            {
                isEdit &&    
                <EditPost post={post} id={id} setIsEdit={setIsEdit} handleEditPost={handleupdatePost}/>
            }
        </div>
    );
};

export default TutorPost;