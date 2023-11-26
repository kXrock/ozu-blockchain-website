import React from "react";
import classes from "./Button.module.css";



const Button = props => {
    return (<button className={` ${classes.button} ${props.className}`} type="submit" onClick={props.onClick} style={props.style}>
            {props.children}
        </button>);


}

export default Button;