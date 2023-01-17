import React from 'react';
import Hero from '../../conponent/Hero/hero';

const Home = ({isLoggedin}) => {
    return (
        <>
            <Hero isLoggedin={isLoggedin} /> 
        </>
    );
};

export default Home;