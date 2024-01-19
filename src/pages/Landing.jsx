import React from "react";
import Hero from "../components/hero";
import News from "../components/newAndUpdates";
import NomineeSec from "../components/nominee";
import Academy from "../components/Academy";
import Market from "../components/Market";
import Directory from "../components/directory";
import Elements from "../components/Elements";
import Collections from "../components/Collections";
import Recommendation from "../components/recommendations";
import Footer from "../components/Footer";


const LandingPage = () =>{
    return(
        <>
            <Hero />
            <News />
            <NomineeSec />
            <Academy />
            <Market />
            <Directory />
            <Elements />
            <Collections />
            <Recommendation />
            <Footer />
        </>
    )
}

export default LandingPage