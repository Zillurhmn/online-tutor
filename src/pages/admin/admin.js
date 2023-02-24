import React, { useEffect, useState } from 'react'
import AdminLogin from './AdminLogin';
import AdminPayment from './AdminPayment';
import AdminView from './AdminView';
import PostView from './PostView';

function Admin({admin,setAdmin,setIsLoggedin,isLoggedin}) {
  const [allStudentdb, setAllStudentdb] = useState(null)
  const [alltutordb, setAlltutordb] = useState(null)
  const [allposts, setAllposts] = useState(null)
  //--delete user data
  const [deleteUser, setDeleteUser] = useState(null);
  const [deletePost, setDeletePost] = useState(null);
  // console.log("Deleter REquest data ", deleteUser)
  useEffect(()=>{
    if(deleteUser?.user === 'student'){
      console.log("request delete student data",deleteUser?._id)
    }
    if(deleteUser?.user === 'tutor'){
      console.log("request delete tutor data. id: ",deleteUser?._id)
      
    }
  },[deleteUser])
  // ---------------------fetching Students Data=============================
  const fetchStudentsData =()=>{
    fetch("http://localhost:5000/allstudentdb",{
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then( (result) => setAllStudentdb(result))
}
// ---------------------fetching tutors Data'================================
  const fetchTutorsData =()=>{
    fetch("http://localhost:5000/alltutordb",{
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then( (result) => setAlltutordb(result))
}
//--------------------Fetching all posts database============================
const fetchAllPostsDB =()=>{
  fetch("http://localhost:5000/allpostdb",{
    method: 'GET',
    headers: {
    'Content-Type': 'application/json'
    }
})
.then((res) => res.json())
.then( (result) => setAllposts(result))
}
//====================Delete Post==============ssssssssssss
useEffect(() => {
  if(admin){
    //deletePost
    if(deletePost){
      console.log("Deleting Post",deletePost._id)
      fetch(`http://localhost:5000/Deletepost/${deletePost._id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            } ,
        })
        .then((res) => res.json())
        .then((result) => console.log(result))
    }

    fetchAllPostsDB()
    fetchStudentsData()
    fetchTutorsData()
    // console.log(allStudentdb)
    // console.log(alltutordb)
  }
}, [admin,deletePost])
return (
    <>
        <h1 className=' text-3xl font-bold text-center p-4'>Admin Dashboard</h1>
       {
        admin &&  <AdminPayment data={allposts} />
       } 
        <div className='border round-xl m-10 pt-4'>
            {
            !admin && <AdminLogin setAdmin={setAdmin} setIsLoggedin={setIsLoggedin}/>
            }
            {// Tutors DataBase
              admin && <AdminView title={'Tutors Database'} data={alltutordb}  setDeleteUser={setDeleteUser} deleteUser={deleteUser} />
            }
            {// Students database
              admin && <AdminView title={'Students Database'} data={allStudentdb} setDeleteUser={setDeleteUser} deleteUser={deleteUser} />
            }
            {// All Posts Databases
              admin && <PostView data={allposts} deletePost={deletePost} setDeletePost={setDeletePost}  />
            }
        </div>
        
    </>
    
  )
}

export default Admin;