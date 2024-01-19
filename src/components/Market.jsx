import React from "react";
import AcademyCard from "./academyCard";
import SecLink from "./secLink";
import MarketCard from "./marketCard";


export default function Market(){
    return(
        <div className="">
            <div className="px-6">
                <h1 className="mb-2.5">Market</h1>
                <h1 className="text-2xl font-bold mb-8">A curated marketplace for digital & physical products</h1>

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