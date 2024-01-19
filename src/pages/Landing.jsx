import React from "react";
import Hero from "../components/hero";
import News from "../components/newAndUpdates";
import NomineeSec from "../components/nominee";
import Academy from "../components/Academy";
import Market from "../components/Market";
import Directory from "../components/directory";


const LandingPage = () =>{
    return(
        <>
            <Hero />
            <News />
            <NomineeSec />
            <Academy />
            <Market />
            <Directory />
        </>
    )
}

export default LandingPage