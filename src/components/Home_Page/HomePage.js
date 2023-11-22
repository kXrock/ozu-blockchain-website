import React from "react";
import Navbar from "./Navbar/Navbar"
import Section from "./Intro Header/Section";
import Container from "./About Part/Container";
import Mission from "./Club Mission/Mission";
import Teams from "./Teams Part/Teams"
import Footer from "./Footer/Footer";

function HomePage() {
    return (
        <React.Fragment>
            <Navbar />
            <Section />
            <Container />
            <Mission />
            <Teams />
            <Footer />
        </React.Fragment>
    )
}

export default HomePage;