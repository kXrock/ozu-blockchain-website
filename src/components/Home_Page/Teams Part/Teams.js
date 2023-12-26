
import React, { useState, useRef } from "react";
import classes from "./Teams.module.css";
import Team_Container from "../UI/Team_Container";
import Button from "../UI/Button";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import swiperclasses from "./Swiper.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//import './styles.css';




const Team = props => {

    const [isFlipped1, setFlipped1] = useState(false);
    const [isFlipped2, setFlipped2] = useState(false);
    const [isFlipped3, setFlipped3] = useState(false);

    const handleFlip1 = () => {
        setFlipped1(!isFlipped1);
    };
    const handleFlip2 = () => {
        setFlipped2(!isFlipped2);
    };
    const handleFlip3 = () => {
        setFlipped3(!isFlipped3);
    };
    console.log(isFlipped3);
    return (
        <div className={classes.main_div}>
            <h5 className={classes.h5}>Team</h5>
            <h3 className={classes.h3}>Our Teams</h3>
            <div className={classes.t_con}>
                <div className={`${classes.card1} ${isFlipped1 ? classes.flipped1 : ''}`}>
                    <div className={classes.cardfront1}>
                        <h3 className={classes.h3}>Developers</h3>
                        <p className={classes.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                        <Button className={classes.b1} style={{ top: "25px", position: "relative" }} onClick={handleFlip1}>Members</Button>
                    </div>
                    <div className={classes.cardback1}>
                        <img src="/assets/back_icon.png" onClick={handleFlip1} style={{ height: "30px", width: "30px", cursor: "pointer", marginRight: "230px", display: "inline-flex" }}></img>
                        <div className={classes.backphoto}>
                            <img className={classes.personp} src="/assets/01.jpg" style={{ width: "auto", borderRadius: "50px", background: "transparant" }}></img>
                            <p className={classes.p} style={{ marginBottom: "0" }}>Kerem Kaya</p>
                            <div className={classes.backsocial}>
                                <a href="https://www.linkedin.com/in/kerem-kaya-1574b0227/">
                                    <img className={classes.img} src="/assets/linkedin.png" alt=""></img>
                                </a>
                                <a href="https://github.com/kXrock">
                                    <img className={classes.img} src="/assets/github.png" alt=""></img>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={`${classes.card2} ${isFlipped2 ? classes.flipped2 : ''}`}>
                    <div className={classes.cardfront2}>
                        <h3 className={classes.h3}>Research</h3>
                        <p className={classes.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                        <Button className={classes.b1} style={{ top: "25px", position: "relative" }} onClick={handleFlip2} >Members</Button>
                    </div>
                    <div className={classes.cardback2}>
                        <img src="/assets/back_icon.png" onClick={handleFlip2} style={{ height: "30px", width: "30px", cursor: "pointer", marginRight: "230px", display: "inline-flex" }}></img>
                        <div className={classes.backphoto} style={{padding:"0px"}}>
                            <Swiper className={swiperclasses.swiper} modules={[Navigation, Pagination, Scrollbar, A11y]}
                                slidesPerView={1}
                                navigation
                                speed={500}
                                pagination={{ clickable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                style={{  display: "flex", height: "400px", width: "240px" }}>
                                <SwiperSlide >
                                <div className={classes.backphoto}>
                                        <img className={classes.personp} src="/assets/01.jpg" style={{ width: "auto", borderRadius: "50px", background: "transparant" }}></img>
                                        <p className={classes.p} style={{ marginBottom: "0" }}>Kerem Kaya</p>
                                        <div className={classes.backsocial}>
                                            <a href="https://www.linkedin.com/in/kerem-kaya-1574b0227/">
                                                <img className={classes.img} src="/assets/linkedin.png" alt=""></img>
                                            </a>
                                            <a href="https://github.com/kXrock">
                                                <img className={classes.img} src="/assets/github.png" alt=""></img>
                                            </a>
                                        </div>

                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={classes.backphoto}>
                                        <img className={classes.personp} src="/assets/01.jpg" style={{ width: "auto", borderRadius: "50px", background: "transparant" }}></img>
                                        <p className={classes.p} style={{ marginBottom: "0" }}>Kerem Kaya</p>
                                        <div className={classes.backsocial}>
                                            <a href="https://www.linkedin.com/in/kerem-kaya-1574b0227/">
                                                <img className={classes.img} src="/assets/linkedin.png" alt=""></img>
                                            </a>
                                            <a href="https://github.com/kXrock">
                                                <img className={classes.img} src="/assets/github.png" alt=""></img>
                                            </a>
                                        </div>

                                    </div>

                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div className={`${classes.card3} ${isFlipped3 ? classes.flipped3 : ''}`}>
                    <div className={classes.cardfront3} >
                        <h3 className={classes.h3}>Marketing</h3>
                        <p className={classes.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                        <Button className={classes.b1} onClick={handleFlip3}>Members</Button>
                    </div>
                    <div className={classes.cardback3} >
                        <p>This is the back of the card</p>
                        <Button onClick={handleFlip3}>back</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;

/*<div className={classes.backphoto}>
                            <Swiper className={classes.swiper} modules={[Navigation, Pagination, Scrollbar, A11y]}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: false }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                style={{ backgroundColor: "Black", display: "flex", position: "relative", justifyContent: "center", height: "100%", width: "240px" }}>
                                <SwiperSlide style={{ backgroundColor: "Yellow", transform: "rotateY(180deg)" }}>
                                    <img className={classes.personp} src="/assets/01.jpg" style={{ width: "auto", borderRadius: "50px", background: "transparant", paddingBottom: "100px" }}></img>
                                    <p className={classes.p} style={{ marginBottom: "0" }}>Kerem Kaya</p>
                                    <div className={classes.backsocial}>
                                        <a href="https://www.linkedin.com/in/kerem-kaya-1574b0227/">
                                            <img className={classes.img} src="/assets/linkedin.png" alt=""></img>
                                        </a>
                                        <a href="https://github.com/kXrock">
                                            <img className={classes.img} src="/assets/github.png" alt=""></img>
                                        </a>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={classes.backphoto}>
                                        <img className={classes.personp} src="/assets/01.jpg" style={{ width: "auto", borderRadius: "50px", background: "transparant" }}></img>
                                        <p className={classes.p} style={{ marginBottom: "0" }}>Kerem Kaya</p>
                                        <div className={classes.backsocial}>
                                            <a href="https://www.linkedin.com/in/kerem-kaya-1574b0227/">
                                                <img className={classes.img} src="/assets/linkedin.png" alt=""></img>
                                            </a>
                                            <a href="https://github.com/kXrock">
                                                <img className={classes.img} src="/assets/github.png" alt=""></img>
                                            </a>
                                        </div>

                                    </div>

                                </SwiperSlide>
                            </Swiper>
                        </div>*/