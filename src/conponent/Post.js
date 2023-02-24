import React, { useEffect, useState } from 'react';

const Post = ({enrollData,id,userName,setIsReviewData,isReviewData,reload,setreload}) => {
    // console.log("Enroll Data",enrollData)
    const [isMarkComplete, setIsMarkComplete] = useState(false)
    const [isReview,setIsReview] = useState();
    const [reportButton, setReportButton] = useState(false)
    const [reportData, setReportData] = useState(null)
    const [report, setReport] = useState()

    //Meeting Link
    const meetingLink  = enrollData.meetingLink;
    const handleMarkComplete =()=>{
        setIsMarkComplete(!isMarkComplete)
    }
    
    const handleReportClick = ()=>{
        setReportButton(!reportButton)
    }
    //==================Review Section==========================================================================================
    const handleReviewForm=(e)=>{
        e.preventDefault();
        const review = e.target.review.value;
        console.log(review)
        const reviewData = {
            id:id,
            review: review,
            name:userName,
            complete:true
        }
        // console.log("url is ",`http://localhost:5000/review/${enrollData._id}/${id}`)
        // console.log("user ReviewData", reviewData);
        fetch(`http://localhost:5000/review/${enrollData._id}/${id}`,{
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-type': 'application/json', 
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(reviewData),
        })
            // .then(res => alert(res.status))
          .then((res) => res.json())
          .then(data=>setIsReviewData(data))
        
        e.target.review.value = ""
         setIsReview(true)
         setIsMarkComplete(false)
    }
    useEffect(()=>{
        const reviewDone = enrollData.enroll.filter(obj=> obj.id === id)
        // console.log(reviewDone,"reviewDone data")
        if(reviewDone[0].review?.length > 5){
            setIsReview(true)
        }
    },[isReviewData])
    
    //================Report section=============================================================================================
    const handleReportForm = (e)=>{
        e.preventDefault();
        const report = e.target.report.value;
        console.log(report, " Report ")
        const reportData = {
            id:id,
            report: report,
            name:userName,
        }
        // console.log(reportData);
        fetch(`http://localhost:5000/report/${enrollData._id}/${id}`,{
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-type': 'application/json', 
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(reportData),
        })
            // .then(res => alert(res.status))
          .then((res) => res.json())
          .then(data=>{ 
            setReportData(data)
        })
        e.target.report.value = ""
        setReportButton(false)
        setreload(!reload)
        }
        useEffect(()=>{
            const ReportDone = enrollData.report?.filter(obj=> obj.id === id)
            if( ReportDone && ReportDone[0]?.report?.length ){
                // console.log("Repost Found")
                setReport(true)
            }
        },[reportData,reload])

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
                        {
                            !isReview && <a href={`${meetingLink}`} target='_blank' className='btn-1' >Go to Class</a>
                        }
                        {/* <button onClick={handleGoToClass}  disabled={isReview?true:false} className="btn-1">Go to Class</button> */}
                        <button onClick={handleMarkComplete} disabled={isReview?true:false}  className="p-3 rounded-md mx-2 text-slate-900  bg-green-600" >
                            {isReview?'Completed':'Mark Complete'}
                        </button>                                    
                        <button onClick={handleReportClick} disabled={report?true:false} className="btn bg-red-500">
                            {report?'Reported !':'Report'}
                        </button>
                    </div>
                    {//====================Review Form================
                        isMarkComplete && 
                        <div className='pt-5'>
                            <form onSubmit={handleReviewForm}>
                                <input type="text" placeholder={"Give a Review"} name='review'  className="input input-bordered mb-5 mt-3 w-[90%]"  required />
                                <br />
                                <input  type="submit" value={"Give Review"} className='w-32 h-10 border-0 rounded font-semibold bg-button-bg text-black hover:bg-[#ddc660] hover:text-white cursor-pointer mt-5 ' />
                            </form>
                        </div>
                    }
                    {//---------------Report Form------------
                        !report && reportButton && 
                        <div className='pt-5'>
                            <form onSubmit={handleReportForm}>
                                <input type="text" placeholder={"Give a Report"} name='report'  className="input input-bordered mb-5 mt-3 w-[90%]"  required />
                                <br />
                                <input  type="submit" value={"Give Report"} className='w-32 h-10 border-0 rounded font-semibold bg-button-bg text-black hover:bg-[#ddc660] hover:text-white cursor-pointer mt-5 ' />
                            </form>
                        </div>
                    }
                    {// Maping all Review that Exists
                        enrollData && enrollData.enroll.map(ob=> {
                            return (
                            ob.review?.length > 3 ?
                            <div className='m-4 p-4 bg-gray-600 text-white rounded-lg'>
                                <div className='py-2'>{ob?.review}</div>
                                <div className='text-xs font-bold'>{ob?.name}</div>
                            </div>
                            : <div></div>
                        )}
                        )
                        
                    }
                    {// Maping all Report that Exists
                        enrollData && enrollData.report?.map(ob=> {
                            return (
                            ob.report?.length > 3 ?
                            <div className='m-4 p-4 bg-red-600 text-white rounded-lg'>
                                <div className='py-2'>-{ob?.report}</div>
                                <div className='text-xs font-bold'>Reported by: {ob?.name}</div>
                            </div>
                            : <div></div>
                        )}
                        )
                        
                    }
            </div>
        </div>
    );
};

export default Post;