import React from "react";
import classes from "./Section.module.css"
import Button from "../UI/Button";


const Section = props => {
    return (
        <div className={classes.main_div}>
            <span className={classes.main_title}>Burası tamamen kalkacak</span>
            <span className={classes.subtitle}>Yerine etkinlikler kısmı eklenecek</span>
            <Button className={classes.button}>İncele</Button>
        </div>
    );
}

export default Section;
