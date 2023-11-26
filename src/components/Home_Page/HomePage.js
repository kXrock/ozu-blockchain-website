import React, { useRef } from "react";
import Navbar from "./Navbar/Navbar"
import Section from "./Intro Header/Section";
import Container from "./About Part/Container";
import Mission from "./Club Mission/Mission";
import Teams from "./Teams Part/Teams"
import Footer from "./Footer/Footer";
import Button from "./UI/Button";
import classes1 from "../Home_Page/UI/Titles.module.css";
import classes from "../Home_Page/Navbar/Navbar.module.css";
import Wave from 'react-wavify';
import classes2 from "./Intro Header/Section.module.css";


function HomePage() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const handleClick1 = () => {
        ref1.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleClick2 = () => {
        ref2.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleClick3 = () => {
        ref3.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleClick4 = () => {
        ref4.current?.scrollIntoView({ behavior: 'smooth' });
    };


    ref2.current?.scrollIntoView({ behavior: 'smooth' });
    return (
        <React.Fragment>
            <div className={classes.navbar}>
                <div className={classes1.logo}>
                    <a href="/">
                        <img src={"assets/main_logo.jpg"} alt="" className={classes1.img}></img>
                    </a>
                </div>
                <ul className={classes1.titles}>
                    <li className={classes1.li}>
                        <h3 className={classes1.h3} onClick={handleClick1}>
                            About
                        </h3>
                    </li>
                    <li className={classes1.li}>
                        <h3 className={classes1.h3} onClick={handleClick2}>
                            Work
                        </h3>
                    </li >
                    <li className={classes1.li}>
                        <h3 className={classes1.h3} onClick={handleClick3}>
                            Team
                        </h3>
                    </li>
                    <li className={classes1.li}>
                        <h3 className={classes1.h3} onClick={handleClick4}>
                            Socials
                        </h3>
                    </li>

                </ul>
                <div className={classes.Buttons}>
                    <Button className={classes.button}>
                        Mint NFT
                    </Button>
                </div>

            </div>
            <Section />
            <div ref={ref1}>
                <Container />
            </div>
            <div ref={ref2}>
                <Mission />
            </div>
            <div ref={ref3}>
                <Teams />
            </div>

            <div ref={ref4} style={{height:"auto",marginTop:"100px"}}>
                
                <Wave fill='#1c375a'
                    paused={false}
                    style={{ display: 'flex', position: "absolute", height: "350px", display: "block", overflow: "hidden", zIndex: "-1",padding:"10px 0 0 0",opacity:"0.7"}}
                    options={{
                        height:20,
                        amplitude:50,
                        speed: 0.15,
                        points:4
                    }}>

                </Wave>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default HomePage;