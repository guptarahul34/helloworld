import React from 'react';
import {NavLink} from 'react-router-dom'

const Menu = ()=>{
    return(
        <>
            {/* <a href="/">Home</a><br/>
            <a href="/about">About</a><br/>
            <a href="/user">User</a> */}
            <NavLink exact to="/" activeClassName="active_class">Home</NavLink><br/>
            <NavLink exact to="/about/rahul" activeClassName="active_class">About</NavLink><br/>
            <NavLink exact to="/user" activeClassName="active_class">User</NavLink>
        </>
    );
}

export default Menu;