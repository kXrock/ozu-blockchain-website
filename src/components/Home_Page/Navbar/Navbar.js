import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./Navbar.module.css";
import Titles from "../UI/Titles";
const ethers = require("ethers");



const Navbar = (props) => {


    const [account, setAccount] = useState("");
    const [provider, setProvider] = useState(null);



    function connect() {
        if (!window.ethereum) {
            alert("Metamask is not installed");
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        provider
            .send("eth_requestAccounts", [])
            .then((accounts) => setAccount(accounts[0]))
            .catch((err) => console.log(err));

    }



    return (
        <div className={classes.navbar}>
            <Titles about_ref={props.ref1} work_ref={props.work_ref} team_ref={props.team_ref} social_ref={props.ref}/>
            <div className={classes.Buttons}>
                <Button className={classes.b1}>
                    a
                </Button>
            </div>

        </div>);
}

export default Navbar;

/* Connect Wallet Part

<Button className={classes.wallet} onClick={()=>{
                    if (account) return;
                    connect();
                }} >
                    {account ? "Connected" : "Connect Account"}
                </Button>*/