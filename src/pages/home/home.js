import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Hero from '../../conponent/Hero/hero';

const Home = ({  Allposts, setAllposts }) => {
    
    const [reloadPosts, setReloadPosts] = useState(0)

    useEffect(() => {
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
        fetchPosts()
        console.log( "All",Allposts)
    }, [reloadPosts])

  
 
    return (
        <>
            <Hero  Allposts={Allposts}  setReloadPosts={setReloadPosts} reloadPosts={reloadPosts} /> 
        </>
    );
};

export default Home;