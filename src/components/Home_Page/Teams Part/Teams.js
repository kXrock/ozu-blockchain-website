
import React, { useState } from "react";
import classes from "./Teams.module.css";
import Team_Container from "../UI/Team_Container";
import Button from "../UI/Button";


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
                        <Button className={classes.b1} onClick={handleFlip1}>Members</Button>
                    </div>
                    <div className={classes.cardback1}>
                        <p>This is the back of the card</p>
                        <Button onClick={handleFlip1}>back</Button>
                    </div>
                </div>
                <div className={`${classes.card2} ${isFlipped2 ? classes.flipped2 : ''}`}>
                    <div className={classes.cardfront2}>
                        <h3 className={classes.h3}>Research</h3>
                        <p className={classes.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                        <Button className={classes.b1} onClick={handleFlip2}>Members</Button>
                    </div>
                    <div className={classes.cardback2}>
                        <p>This is the back of the card</p>
                        <Button onClick={handleFlip2}>back</Button>
                    </div>
                </div>

                <div className={`${classes.card3} ${isFlipped3 ? classes.flipped3 : ''}`}>
                    <div className={classes.cardfront3}>
                        <h3 className={classes.h3}>Marketing</h3>
                        <p className={classes.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                        <Button className={classes.b1} onClick={handleFlip3}>Members</Button>
                    </div>
                    <div className={classes.cardback3}>
                        <p>This is the back of the card</p>
                        <Button onClick={handleFlip3}>back</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;