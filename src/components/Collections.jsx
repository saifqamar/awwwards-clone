import React from "react";
import AcademyCard from "./academyCard";
import SecLink from "./secLink";
import MarketCard from "./marketCard";
import NomineeCard from "./nomineeSliderCard";
import NomineeSlider from "./nomineeSlider";


export default function Collections(){
    return(
        <div className="">
            <div className="px-6 mt-12">
                <h1 className="mb-2.5 md:mb-6 xl:mb-8" id="Collection">Collections</h1>
                <h1 className="text-2xl font-bold mb-8text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 md:mb-12 lg:mb-16 xl:md-20 2xl:md-24 w-4/6 lg:w-3/6 xl:leading-[120%]">Explore a wide <br />variety of collections.</h1>
                <div className="nominee-cards">
                    {/* <img className="rounded-lg" src="https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/01/659ef087a41bc827547067.png" alt="" /> */}
                    <NomineeSlider />
                </div>
                <SecLink />
            </div>
        </div>
    )
}