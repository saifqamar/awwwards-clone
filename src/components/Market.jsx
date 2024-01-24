import React from "react";
import AcademyCard from "./academyCard";
import SecLink from "./secLink";
import MarketCard from "./marketCard";


export default function Market(){
    return(
        <div className="">
            <div className="px-6">
                <h1 className="mb-2.5 md:mb-6 xl:mb-8">Market</h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 md:mb-12 lg:mb-16 xl:md-20 2xl:md-24 w-4/6 lg:w-7/12 xl:leading-[120%]">A curated marketplace for digital & physical products</h1>

                <div className="academy-cards flex flex-col gap-y-6 md:flex-row md:gap-x-6">
                    <MarketCard />
                    <MarketCard />
                    <MarketCard />
                </div>
                <SecLink />
            </div>
        </div>
    )
}