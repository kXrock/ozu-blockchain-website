import React, { useEffect } from "react";
import classes from "./Info_mission.module.css";
import Button from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Info_mission = props => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);

    return (
        <div className={classes.main_div} data-aos="fade-left" ref={props.ref1}>
            <h6 className={classes.h6}>
                Work
            </h6>
            <h3 className={classes.h3}>
                Club Mission
            </h3>
            <p className={classes.p}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <Button className={classes.button}>İncele</Button>
        </div>
        
    );
}

export default Info_mission;