import React, { useEffect } from "react";
import classes from "./Container.module.css"
import Info from "../UI/Info";
import Aos from "aos";
import "aos/dist/aos.css";


const Container = props=>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);


    return(
        <div className={classes.container}>
            <Info/>
            <img src="assets/team.jpeg" alt="/" className={classes.img} data-aos="fade-left"></img>
        </div>
    );
}

export default Container;