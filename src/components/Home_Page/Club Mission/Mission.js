import React, { useEffect } from "react";
import classes from "./Mission.module.css"
import Info from "../UI/Info_mission";
import Aos from "aos";
import "aos/dist/aos.css";
import Info_mission from "../UI/Info_mission";


const Mission = props=>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);

    return(
        <div className={classes.mission}>
            <img src="assets/mission_p.jpg"  alt="/" className={classes.img} data-aos="fade-right"></img>
            <Info_mission ref={props.ref1}/>
        </div>
    );
}

export default Mission;