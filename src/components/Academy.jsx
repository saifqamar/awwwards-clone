import React from "react";
import Header from "./header";
import HeroBody from "./heroBody";
import AcademyCard from "./academyCard";
import SecLink from "./secLink";


const Academy = () =>{
    return(
        <div className="">
            <div className="px-6">
                <h1 className="mb-2.5">Academy</h1>
                <h1 className="text-3xl font-bold mb-8">Learn from the best instructors.</h1>

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