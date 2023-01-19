import React from 'react';
import p1 from '../../images/p1.png';
const Search = ({searchQuery,setSearchQuery,isLoggedin,Allposts}) => {
    const onValueChange = (e) => {
        let value = e.target.value.toLocaleLowerCase();
        console.log(value)
        setSearchQuery(value);
    }
    const enqury = ()=>{
        console.log("Button clicked")

    }
    return (
        <>
            <div className='flex items-center justify-center m-10'>
                <input  onKeyUp={onValueChange}type="search" placeholder="Search Tutor" 
                        className="input input-bordered mr-5 border-[#E6C229] pl-5"  defaultValue={searchQuery}/>
                {/* <button onClick={console.log("clicked")} className='btn-1'>Search</button> */}
                <input onClick={enqury} type="button" value="Search" className='btn-1'/>
            </div>
            <div className='ml-10 p-5 text-3xl font-bold'>Search Result:</div>
            <div className='flex  flex-wrap justify-center items-center'>
                {
                    (searchQuery.length < 2) &&
                    Allposts.map((obj,i)=>{
                        return(
                            <div className='m-4 p-2 flex justify-center w-[45%]'>
                                <div className="hero w-3/4 bg-base-200 rounded-2xl">
                                    <div className="hero-content flex-col lg:flex-row">
                                        <div >
                                            
                                            <div className='flex flex-col justify-center p-4'>
                                                {obj.topicName && <h1 className="text-xl font-bold text-[#e6c229]">{obj.topicName}</h1>}
                                                {obj.name && <h1 className='text-sm py-1'><span className='font-bold '>Tutor: </span> {obj.name}</h1>}
                                                {obj.education && <h1 className='text-sm py-1'><span className='font-bold '>Completed: </span>{obj.education}</h1>}
                                                {obj.subject && <h1 className='text-sm py-1'><span className='font-bold '>Expertise: </span>{obj.subject}</h1>}
                                                {obj.amount && <h1 className='text-sm py-1'><span className='font-bold '> Total Fee: </span>{obj.amount}</h1>}
                                                {obj.totalTime && <h1 className='text-sm py-1'><span className='font-bold '>Total time: </span>{obj.totalTime}</h1>}
                                            {obj.review && <h1 className='text-sm py-1'><span className='font-bold '>Review: </span>{obj.review}</h1>}
                                                {obj.topicDescription && <p className="py-2 text-justify ">{obj.topicDescription}</p>}
                                            </div>
                                            <button className="btn-1 ml-5 mb-5">Contact</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
                <div className='m-10 p-5 flex justify-center'>
                    <div className="hero w-3/4 bg-base-200 rounded-2xl">
                        <div className="hero-content flex-col lg:flex-row">
                            {/* <img src={p1} className="h-w-64 w-64" /> */}
                            <div>
                                <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                                <h1 className='text-lg'> Subject</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn-1">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-10 p-5 flex justify-center'>
                    <div className="hero w-3/4 bg-base-200 rounded-2xl">
                        <div className="hero-content flex-col lg:flex-row">
                            {/* <img src={p1} className="h-w-64 w-64" /> */}
                            <div>
                                <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                                <h1 className='text-lg'> Subject</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn-1">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;