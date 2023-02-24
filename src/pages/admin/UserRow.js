import React from 'react';

const UserRow = ({user,i,setDeleteUser,deleteUser}) => {
    const deleteUserDAta =()=>{
        // console.log("Wants to delete", user)
        setDeleteUser(user)
        //------Deleting Request will be from here--!!!!
    }
    return (
        <div>
            <div key={i} className='flex justify-around items-center text-start gap-4 m-10 p-2 border round-xl bg-sky-50'>
                                <div className=' w-[100%] text-xs  border p-2 rounded shadow'>{user._id}</div>
                                <div className='w-[100%] text-xs font-bold border p-2 rounded shadow'>{user.name || "Not Given"}</div>
                                <div className='w-[100%] text-xs font-bold border p-2 rounded text-teal-500 shadow'>{user.email || "Not Given"}</div>
                                <div className=' w-[100%]  text-xs font-bold border p-2 rounded text-orange-400 shadow'>{user.password || "Not Given"}</div>
                                {
                                    user.user === "tutor" &&
                                    <div className=' w-[100%] text-xs shadow border p-2 rounded'>{user.subject || "Not Given"}</div>
                                }
                                {
                                    user.user === 'tutor' && 
                                    <div className=' w-[100%] text-xs shadow border p-2 rounded'>{user.education || "Not Given"}</div>
                                }
                                <button className='btn text-xs font-bold shadow border p-2 rounded ' onClick={deleteUserDAta}>Delete User</button>
                                {/* <button className='btn ml-2'>User Posts</button> */}
                            </div>
        </div>
    );
};

export default UserRow;