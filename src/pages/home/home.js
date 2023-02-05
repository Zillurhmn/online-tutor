import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PostCard from '../../conponent/PostCard';

import s1 from './../../images/s1.png'

// const randomArrGenerator=(arr)=>{
//     if(arr.length){
//         console.log(" arr  length is ", arr.length);
//         let i = 0 ;
//         let countarr = [];
//         let newarr = [];
//         while(i<6){
//             countarr[i] = Math.ceil(Math.random(arr.length)*10)
//             i++;
//         }
//         i=0
//         while(i<6){
//             newarr[i] = arr[countarr[i]];
//             i++;
//         }
//         console.log("new arr  is ", newarr);
//         return newarr;
//     }else{
//         console.log(" arr is empty")
//     }
// }

const Home = ({Allposts,setAllposts,setSearchQuery,searchQuery,setRandomArr,randomArr }) => {
    
    const [reloadPosts, setReloadPosts] = useState(0)
    const [results, setResults] = useState();

    const fetchPosts =()=>{
        fetch("http://localhost:5000/allpostdb",{
            method: 'GET',
            // mode: 'cors', 
            headers: {
            'Content-Type': 'application/json'
            } ,
        })
        // .then(res=> alert(" Fetching All post Data Status - ",res.status))
        .then((res) => res.json())
        .then( (result) => setAllposts(result))
        //   console.log( "All",Allposts)
    }
    
    useEffect(() => {
        if(!Allposts.length){fetchPosts() }
        console.log( "All posts ",Allposts)
    }, [reloadPosts])
    
    const onValueChange = (e) => {
        let value = e.target.value.toLocaleLowerCase();
        console.log(value)
        setSearchQuery(value);
    }
  
    const enqury = ()=>{
        console.log("Button clicked")
        const compareArr = Allposts;
        if(searchQuery){
            const arr = compareArr.filter((obj)=>{
                return(
                        obj.name.toLocaleLowerCase().includes(searchQuery)||
                        obj.subject.toLocaleLowerCase().includes(searchQuery) ||
                        obj.topicName.toLocaleLowerCase().includes(searchQuery) ||
                        obj.education.toLocaleLowerCase().includes(searchQuery) ||
                        obj.totalTime.toLocaleLowerCase().includes(searchQuery) ||
                        obj.topicDescription.toLocaleLowerCase().includes(searchQuery) ||
                        obj.keyword.toLocaleLowerCase().includes(searchQuery)
                )
            })
            console.log("new Arr", arr)
            setResults(arr);
        }else{
            setResults(null)
        }
        
    }
    // const activeRandomArr = ()=>{
    //     const arr = randomArrGenerator(Allposts)
    //     setRandomArr(arr);
    //     console.log("Final Random Array" ,randomArr)
    // }
  
    
    return (
        <>
            {/* <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} 
            Allposts={Allposts}  setReloadPosts={setReloadPosts} reloadPosts={reloadPosts}
            randomPostArr={randomPostArr} />  */}
            
            <div >
                <div className="hero ">
                    <div className="hero-content flex flex-col lg:flex-row-reverse lg:justify-between container mx-auto">
                        <img src={s1} className="max-w-sm rounded-lg" alt='Img'/>
                        <div>
                            <h1 className="text-5xl font-bold pb-10">Find the <span className='text-[#E6C229]'>Tutor </span>
                                <br></br> for You!
                            </h1>
                            <div className='flex justify-center '>
                                <input  onChange={onValueChange} type="search" placeholder="Search Tutor" 
                                className="input input-bordered mr-5 border-[#E6C229] pl-5" />
                                <input onClick={enqury} type="button" value="Search" className='btn-1'/>
                            </div>

                        </div>
                    </div>
                </div>
                
                {/* -------------Fetching Post and reload spin animation ------------------------------------------------------------------- */}
                {
                    (!Allposts) && setReloadPosts(reloadPosts +1) && 
                    <div className="flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-gray-800 border-l-white  rounded-full" role="status">
                        </div>
                    </div>
                }
                <div className='m-4 p-5 flex justify-center gap flex-wrap'>

                    {/* =========================Random post After Fetching Data============================= */}
                    {
                        !results && Allposts && Allposts.map((obj,i)=> (<PostCard obj={obj} index={i} key={i}/>)) 
                    }
                    {
                        // !results && Allposts   && activeRandomArr()
                    }
                    {
                        // !results && Allposts  && Allposts.map((obj,i)=>{})
                    }
                    {
                    // ========================= Search Query All Results=============================================
                        searchQuery && results && results.map((obj,i)=><PostCard obj={obj} index={i} key={i}/>)
                    }
                    {
                        !Allposts && 
                        <div>
                            <div className="hero m-4  w-[300px] bg-base-200 rounded-2xl shadow-md">
                                <div className="hero-content flex flex-col">
                                    {/* <img src={p1} className="h-14 w-14 " alt='img' /> */}
                                    <div className='flex flex-col justify-center items-center'>
                                        <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                                        <h1 className='text-lg'> Subject</h1>
                                        <p className="py-6 text-justify ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    </div>
                                    <div className='flex gap-6' >
                                        <button className="btn-1" >Enroll Now</button>
                                        <button className="btn-1">View Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div> 
        </>
    );
};

export default Home;