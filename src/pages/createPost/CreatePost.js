import React from 'react';

const CreatePost = ({user}) => {
    return (
        <div className='flex align-center justify-center  bg-gray-200'>
            <div className="card  w-full max-w-sm shadow-2xl m-32 ">
                <div className="card-body bg-white rounded">
                    <h1 className='text-center font-bold '>Create New Post </h1>
                    <form >
                        <input placeholder={"Title"}  type="text" className="input input-bordered mb-5 mt-3 w-[90%]" required  />
                        <br />
                        <input type="text" placeholder={"Total Time"}  className="input input-bordered mb-5 mt-3 w-[90%]" required />
                        <br />
                        <input type="text" placeholder={"Price"}  className="input input-bordered mb-5 mt-3 w-[90%]"  required />
                        <br />
                        <input type="text" placeholder={"Zoom Link"}  className="input input-bordered mb-5 mt-3 w-[90%]"  required />
                        <br />
                        <textarea name='description' placeholder="Enter Post Description" className='border p-2 text-gray-600 rounded-lg w-[90%]' id="description" cols="30" rows="10" required></textarea>
                        <input  type="submit" value={"Submit Post"} className='w-32 h-10 border-0 rounded font-semibold bg-button-bg text-black hover:bg-[#ddc660] hover:text-white cursor-pointer mt-5 ' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;