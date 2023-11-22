import React from "react";
import classes from "./Footer.module.css";

const Footer = props => {
    return (
        <div className={classes.maindiv}>
            <div className={classes.text_div}><h5 className={classes.h5}>Socials</h5></div>
            <div className={classes.logos}>
                <a href="https://twitter.com/OzUBlockchain">
                    <img className={classes.img} src="/assets/twitter-sign.png" alt=""></img>
                </a>
                <a href="https://medium.com/ozu-blockchain">
                    <img className={classes.img} src="/assets/medium.png" alt=""></img>
                </a>
                <a href="https://www.linkedin.com/company/ozublockchain/">
                    <img className={classes.img} src="/assets/linkedin-logo.png" alt=""></img>
                </a>
                <a href="">
                    <img className={classes.img} src="/assets/mail.png" alt=""></img>
                </a>
                <a href="https://discord.gg/9afxhHdr">
                    <img className={classes.img} src="/assets/discord.png" alt=""></img>
                </a>
            </div>
            <div className={classes.last}>
                <h5 className={classes.h5}>©2023 OZU BLOCKCHAIN | Tüm hakları saklıdır.</h5>
            </div>


        </div>
    );
}

export default Footer;