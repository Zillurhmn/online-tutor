import React, { useEffect } from 'react';
import TutorPost from './TutorPost';

const TutorsCollection = ({id,tutorsPosts}) => {

    // console.log("Find Tutors Post",typeof(tutorsPosts))
    return (
        <div className='flex flex-wrap justify-center items-center w-full'>
            {
                tutorsPosts.map((post,i)=>{
                    console.log("Post si",post)
                    return(<TutorPost post={post}/>)
                })
            }
            {/* <PostCard /> */}
        </div>
    );
};

export default TutorsCollection;