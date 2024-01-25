import React from "react";
import Header from "./header";
import HeroBody from "./heroBody";


const Hero = () =>{
    return(
        <div className="hero bg-aw-background">
            <div className="px-6" id="SOTD">
                <Header />
                <HeroBody />
            </div>
        </div>
    )
}

export default Hero;