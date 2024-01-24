import React from "react";
import Header from "./header";
import HeroBody from "./heroBody";
import AcademyCard from "./academyCard";
import SecLink from "./secLink";


const Academy = () =>{
    return(
        <div className="">
            <div className="px-6">
                <h1 className="mb-2.5 md:mb-6 xl:mb-8">Academy</h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-12 lg:mb-16 xl:md-20 2xl:md-24 w-4/6 lg:w-3/6 xl:leading-[120%]  ">Learn from the best instructors.</h1>

                <div className="academy-cards flex flex-col gap-y-6 md:flex-row md:gap-x-6">
                    <AcademyCard />
                    <AcademyCard />
                    <AcademyCard />
                </div>
                <SecLink />
            </div>
        </div>
    )
}

export default Academy;