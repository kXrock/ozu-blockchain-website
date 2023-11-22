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
            <Titles />
            <div className={classes.Buttons}>
                <a className={classes.a} href="https://twitter.com/OzUBlockchain">
                    <Button className={classes.twitter} />
                </a>
                <Button className={classes.b1}>
                    Sign In
                </Button>
                <Button className={classes.wallet} onClick={()=>{
                    if (account) return;
                    connect();
                }} >
                    {account ? "Connected" : "Connect Account"}
                </Button>
            </div>

        </div>);
}

export default Navbar;