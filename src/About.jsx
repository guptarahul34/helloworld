import React from 'react';
import Menu from './Menu';
import {useParams,useLocation,useHistory} from 'react-router-dom';

const About = (props)=>{
    const {fname} = useParams();
    const Location = useLocation();
    const history = useHistory();
    // console.log(history);
    return(
        <>
            <Menu/>
                <h1>i am {props.name} us page</h1>
                <p>using use param Hooks url data <h2>{fname}</h2></p> 
                <h1>my current location is <p>{Location.pathname}</p></h1>
                {(Location.pathname==="/about/rahul")?<button onClick={()=>{
                history.goBack();
                }}>Go Back</button>:null}
        </>
    );
}

export default About;