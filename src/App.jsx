import React from 'react';
import Home from './Home';
import About from './About';
import User from './User';
import './index.css';
import {Route,Switch} from 'react-router-dom';
import Error from './Error';

const App = ()=>{
    return(
        <>
            <Switch>
                <Route exact path="/" component={()=>{
                    return(
                        <Home name="Home"/>
                    );
                }}></Route>
                <Route exact path="/about/:fname" component={()=>{
                    return <About name="About"/>
                }}></Route>
                <Route path="/about" component={()=>{
                    return <About name="About"/>
                }}></Route>
                <Route exact path="/User" component={()=>{
                    return <User name="User"/>
                }}></Route>
                <Route component={Error}></Route>
            </Switch>
        </>
    );
}

export default App;