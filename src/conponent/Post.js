import React, { useState } from 'react';
// import p1 from './../images/p1.png'

const Post = ({enrollData,handleReviewForm}) => {
    console.log("Enroll Data",enrollData)
    const [isMarkComplete, setIsMarkComplete] = useState(false)

    const handleMarkComplete =()=>{
        setIsMarkComplete(!isMarkComplete)
    }
    const handleGoToClass =()=>{
        alert("Go to Class Now")
    }
    return (
        <div className='w-full flex justify-center items-center'>
            {/* -------------------All the Enrolled / post  will be here ----------------------------*/}
            <div className='m-10 p-5 flex flex-col justify-start w-[700px] shadow-xl rounded bg-sky-100'>
                                    <h1 className="text-2xl font-bold text-[#e6c229]">{enrollData?.topicName}</h1>
                                    <h1 className='text-lg font-bold'> {enrollData?.name}</h1>
                                    <h1 className='text-lg '> {enrollData?.education}</h1>
                                    <p className="py-5">{enrollData?.topicDescription}</p>
                                    <p className=" text-sm font-bold">Enroll Fee: {enrollData?.amount}/-</p>
                                    <p className='font-bold mb-5'>Class Duration : {enrollData?.totalTime} hour</p>
                                    <div>
                                        <button onClick={handleGoToClass}  disabled={isMarkComplete?true:false} className="btn-1">Go to Class</button>
                                        <button onClick={handleMarkComplete}  className="p-3 rounded-md mx-2 text-slate-900  bg-green-600" >
                                            Mark Complete
                                        </button>                                    
                                    </div>
                                    {
                                        isMarkComplete &&
                                        <div className='pt-5'>
                                            <form onSubmit={handleReviewForm}>
                                                <input type="text" placeholder={"Give a Review"} name='review'  className="input input-bordered mb-5 mt-3 w-[90%]"  required />
                                                <br />
                                                <input  type="submit" value={"Give Review"} className='w-32 h-10 border-0 rounded font-semibold bg-button-bg text-black hover:bg-[#ddc660] hover:text-white cursor-pointer mt-5 ' />

                                            </form>
                                        </div>
                                    }
                        
                    </div>
        </div>
    );
};

export default Post;