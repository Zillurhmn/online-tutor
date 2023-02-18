import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

const EditProfile = ({user,setUser,isLoggedin}) => {
    const navigate = useNavigate();
    const userObj = user;
    const actor = userObj.user;

    useEffect(() => {
      if(!isLoggedin){
        navigate('/')
      }
    }, [])
    
    return (
        <div>
            Edit Profile here
        </div>
    );
};

export default EditProfile;