import React, { useEffect, useState } from 'react'
import AdminLogin from './AdminLogin';
import AdminPayment from './AdminPayment';
import AdminView from './AdminView';

function Admin({admin,setAdmin,setIsLoggedin,isLoggedin ,setDeleteUser,deleteUser}) {
  const [allStudentdb, setAllStudentdb] = useState(null)
  const [alltutordb, setAlltutordb] = useState(null)
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

useEffect(() => {
  if(admin){
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
        admin &&  <AdminPayment />
       } 
        <div className='border round-xl m-10'>
            {
            !admin && <AdminLogin setAdmin={setAdmin} setIsLoggedin={setIsLoggedin}/>
            }
            {
              admin && <AdminView title={'Tutors Database'} data={alltutordb}  setDeleteUser={setDeleteUser} deleteUser={deleteUser} />
            }
            {
              admin && <AdminView title={'Students Database'} data={allStudentdb} setDeleteUser={setDeleteUser} deleteUser={deleteUser} />
            }
        </div>
        
    </>
    
  )
}

export default Admin;