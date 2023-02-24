import React from 'react';
import UserRow from './UserRow';


const AdminView = ({title,data,setDeleteUser,deleteUser}) => {
    return (
        <div>
            <div>
                <h1 className='text-xl font-bold text-center'>{title}</h1>
                <div>
                    {
                        data && data.map((user,i)=>
                            <UserRow i={i} user={user} key={i} setDeleteUser={setDeleteUser} deleteUser={deleteUser}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminView;