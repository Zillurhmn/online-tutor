import React, { useEffect, useState } from 'react'
import AdminLogin from './AdminLogin';
import AdminPayment from './AdminPayment';
import AdminView from './AdminView';
import PostView from './PostView';

function Admin({admin,setAdmin,setIsLoggedin,isLoggedin ,setDeleteUser,deleteUser}) {
  const [allStudentdb, setAllStudentdb] = useState(null)
  const [alltutordb, setAlltutordb] = useState(null)
  const [allposts, setAllposts] = useState(null)
  // ------------------------------------------------------------------fetching Students Data
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
// --------------------------------------------------------------------fetching tutors Data
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
//--------------------Fetching all posts database------------
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


useEffect(() => {
  if(admin){
    fetchAllPostsDB()
    fetchStudentsData()
    fetchTutorsData()
    // console.log(allStudentdb)
    // console.log(alltutordb)
  }
}, [admin])
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
            {
              admin && <AdminView title={'Tutors Database'} data={alltutordb}  setDeleteUser={setDeleteUser} deleteUser={deleteUser} />
            }
            {
              admin && <AdminView title={'Students Database'} data={allStudentdb} setDeleteUser={setDeleteUser} deleteUser={deleteUser} />
            }
            {
              admin && <PostView data={allposts}/>
            }
        </div>
        
    </>
    
  )
}

export default Admin;