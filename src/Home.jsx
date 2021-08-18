import React from 'react';
// import {NavLink} from 'react-router-dom'
import Menu from './Menu';


const Home = (props)=>{
    return(
        <>
            <Menu/>
            <h1>i am {props.name}</h1>
        </>
    );
}

export default Home;