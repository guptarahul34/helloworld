import React from 'react';
import Menu from './Menu';

const User = (props)=>{
    return(
        <>
        <Menu/>
            <h1>i am {props.name} page</h1>
        </>
    );
}

export default User;