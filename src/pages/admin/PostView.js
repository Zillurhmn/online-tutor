import React from 'react';

const PostView = ({data}) => {
    return (
        <div>
            <h1 className='text-xl font-bold text-center'> ALL Posts Database</h1>
            {
                data && data.map(ob=>(
                    <div className='flex p-1 gap-4 m-2 border bg-sky-50 justify-between items-center'>
                        
                        <div className='text-xs border p-2 rounded min-w-[150px] shadow'>{ob?.tutorId}</div>
                        <div className='text-xs font-bold border p-2 rounded min-w-[150px] shadow'>{ob?.name}</div>
                        <div className='text-xs font-bold border p-2 rounded min-w-[250px] shadow'>{ob?.topicName}</div>
                        <div className='text-xs font-bold border p-2 rounded text-green-500 shadow'>Enroll : {ob.enroll?.length || 0}</div>
                        <div className='text-xs font-bold border p-2 rounded text-red-500 shadow' >Report : {ob.report?.length || 0}</div>
                        <button className='btn text-xs font-bold border p-2 rounded'>Delete post</button>
                    </div>
                ))
            }
        </div>
    );
};

export default PostView;