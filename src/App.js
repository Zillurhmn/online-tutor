import React, { useEffect, useState } from 'react';
import Webpages from './pages/webpages/Webpages';
import './styles/Button/button.css';
import './styles/style.css';

const App = () => {
  const [Allposts, setAllposts] = useState(null)
  useEffect(() => {
    const fetchPosts =()=>{
      fetch("http://localhost:5000/allpostdb",{
        method: 'GET',
        mode: 'cors', 
        headers: {
        'Content-Type': 'application/json'
        } ,
    })
      .then((res) => res.json())
      .then( (result) => setAllposts(result))
      console.log( "All",Allposts)
    }
    fetchPosts()
  }, [])
  console.log( "All",Allposts)
  return (
    <>
      <Webpages/>
    </>
  );
};

export default App;