import React from "react";
import classes from "./Team_Container.module.css";

const Team_Container = props=>{
    return(
        <div className={`${classes.main_div} ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Team_Container;