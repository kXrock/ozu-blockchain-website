import React, { useEffect } from "react";
import classes from "./Container.module.css"
import Info from "../UI/Info";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const Container = props=>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);


    return(
        <div className={classes.container} id="about-part">
            
            <Info/>
            <img src="assets/team.jpeg" alt="/" className={classes.img} data-aos="fade-left"></img>  
            
        </div>
    );
}

export default Container;