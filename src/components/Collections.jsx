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
                <h1 className="mb-2.5">Collections</h1>
                <h1 className="text-2xl font-bold mb-8">Explore a wide <br />variety of collections.</h1>
                <div className="nominee-cards">
                    {/* <img className="rounded-lg" src="https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/01/659ef087a41bc827547067.png" alt="" /> */}
                    <NomineeSlider />
                </div>
                <SecLink />
            </div>
        </div>
    )
}