import React from "react";
import classes from "./Section.module.css"
import Button from "../UI/Button";


const Section = props => {
    return (
        <div className={classes.main_div}>
            <span className={classes.main_title}>KAYDOL VE KENDİNE ÖZGÜ NFT SAHİBİ OL</span>
            <span className={classes.subtitle}>Sen de bu eşşiz dünya içerisinde yerini al</span>
            <Button className={classes.button}>İncele</Button>
        </div>
    );
}

export default Section;
