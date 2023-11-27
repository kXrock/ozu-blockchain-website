import React from "react";
import classes from "./Footer.module.css";

const Footer = props => {
    return (
        <div className={classes.maindiv}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems:"center"}}>
                    <div className={classes.text_div}><h5 className={classes.h5}>Bizimle iletişime geç</h5></div>
                    <h5 className={classes.h5} style={{textTransform:"none",fontWeight:"600"}}>clubs.ozublockchain@ozu.edu.tr</h5>
                    <img src={"assets/main_logo.jpg"} alt="" className={classes.img} style={{background:"white", borderRadius:"50px",height:"70px",width:"auto"}}></img>
                </div>
                <div className={classes.sociallogos}>
                    <div className={classes.text_div}><h5 className={classes.h5}>Socials</h5></div>
                    <a href="https://twitter.com/OzUBlockchain">
                        <img className={classes.img} src="/assets/twitter.png" alt=""></img>
                    </a>
                    <a href="https://medium.com/ozu-blockchain">
                        <img className={classes.img} src="/assets/medium.png" alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/company/ozublockchain/">
                        <img className={classes.img} src="/assets/linkedin.png" alt=""></img>
                    </a>
                    <a href="https://discord.gg/bMM8HUM4">
                        <img className={classes.img} src="/assets/discord.png" alt=""></img>
                    </a>

                </div>
                <div>
                    <div className={classes.text_div}><h5 className={classes.h5}>Kulübün bir parçası ol</h5></div>
                    <h5 className={classes.h5}>başvuru formu gelecek</h5>
                </div>
            </div>

            <div className={classes.logos}>

            </div>
            <div className={classes.last}>
                <h5 className={classes.h5} style={{ fontWeight: "500" }}>©2023 OZU BLOCKCHAIN | Tüm hakları saklıdır.</h5>
            </div>
        </div>
    );
}

export default Footer;

/*<a href="https://twitter.com/OzUBlockchain">
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
                </a>*/
