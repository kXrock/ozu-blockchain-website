import React from "react";
import classes from "./Titles.module.css";

const Titles = props =>{
    return(
        <React.Fragment>
            <div className={classes.logo}>
                <a href="/">
                    <img src={"assets/main_logo.jpg"} alt="" className={classes.img}></img>
                </a>

            </div>
            <ul className={classes.titles}>
                <li className={classes.li}>
                    <h3 className={classes.h3}>
                        About
                    </h3>
                </li>
                <li className={classes.li}>
                    <h3 className={classes.h3}>
                        Work
                    </h3>
                </li >
                <li className={classes.li}>
                    <h3 className={classes.h3}>
                        Team
                    </h3>
                </li>
                <li className={classes.li}>
                    <h3 className={classes.h3}>
                        Socials
                    </h3>
                </li>

            </ul>
        </React.Fragment>
    );
}

export default Titles;