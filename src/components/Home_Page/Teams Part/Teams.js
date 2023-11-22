
import React from "react";
import classes from "./Teams.module.css";
import Team_Container from "../UI/Team_Container";
import Button from "../UI/Button";

const Team = props => {
    return (
        <div className={classes.main_div}>
            <h5 className={classes.h5}>Team</h5>
            <h3 className={classes.h3}>Our Teams</h3>
            <div className={classes.t_con}>
                <Team_Container className={classes.team_container1}>
                    <h3 className={classes.h3}>Developers</h3>
                    <p className={classes.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    <Button className={classes.b1}>Members</Button>
                </Team_Container>

                <Team_Container className={classes.team_container2}>
                    <h3 className={classes.h3}>Research</h3>
                    <p className={classes.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    <Button>Members</Button>
                </Team_Container>

                <Team_Container className={classes.team_container3}>
                    <h3 className={classes.h3}>Marketing</h3>
                    <p className={classes.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    <Button>Members</Button>
                </Team_Container>
            </div>
        </div>
    );
}

export default Team;