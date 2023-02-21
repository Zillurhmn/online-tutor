import React from 'react';

const EditPost = ({post,handleEditPost}) => {

    
    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={handleEditPost}>
                <input placeholder={"Title"} name='topicName'  type="text" defaultValue={post?.topicName || ""} className="input input-bordered mb-5 mt-3 w-[90%]" required  />
                <br />
                <input type="number" placeholder={"Total Time"} name='totalTime' defaultValue={post?.totalTime || ""}  className="input input-bordered mb-5 mt-3 w-[90%]" required />
                <br />
                <input type="number" placeholder={"Price"} name='amount' defaultValue={post?.amount || ""}  className="input input-bordered mb-5 mt-3 w-[90%]"  required />
                <br />
                <input type="text" placeholder={"Keyword"} name={'keyword'} defaultValue={post?.keyword || ""} className="input input-bordered mb-5 mt-3 w-[90%]"  required />
                <br />
                <input type="text" placeholder={"Meeting Link"} name={'meetingLink'} defaultValue={post?.meetingLink || ""}  className="input input-bordered mb-5 mt-3 w-[90%]"  required />
                <br />
                <textarea name='topicDescription' placeholder="Enter Post Description" defaultValue={post?.topicDescription || ""}  className='border p-2 text-gray-600 rounded-lg w-[90%]' id="description" cols="30" rows="10" required></textarea>
                <input  type="submit" value={"Update Post"} className='w-32 h-10 border-0 rounded font-semibold bg-button-bg text-black hover:bg-[#ddc660] hover:text-white cursor-pointer mt-5 ' />
            </form>
        </div>
    );
};

export default EditPost;