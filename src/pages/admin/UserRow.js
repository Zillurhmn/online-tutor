import React from 'react';

const UserRow = ({user,i,setDeleteUser,deleteUser}) => {
    const deleteUserDAta =()=>{
        console.log("Wants to delete", user)
        //------Deleting Request will be from here--!!!!
    }
    return (
        <div>
            <div key={i} className='flex justify-around text-start items-start m-10 p-2 border round-xl'>
                                <div className=' w-[100%] p-2'>{user._id}</div>
                                <div className='w-[100%] p-2'>{user.name || "Not Given"}</div>
                                <div className='w-[100%] p-2'>{user.email || "Not Given"}</div>
                                <div className=' w-[100%] p-2'>{user.password || "Not Given"}</div>
                                {
                                    user.user === "tutor" &&
                                    <div className=' w-[100%] p-2'>{user.subject || "Not Given"}</div>
                                }
                                {
                                    user.user === 'tutor' && 
                                    <div className=' w-[100%] p-2'>{user.education || "Not Given"}</div>
                                }
                                <button className='btn ' onClick={deleteUserDAta}>Delete User</button>
                                {/* <button className='btn ml-2'>User Posts</button> */}
                            </div>
        </div>
    );
};

export default UserRow;