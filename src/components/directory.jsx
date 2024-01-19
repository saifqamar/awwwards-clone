import React from "react";
import AcademyCard from "./academyCard";
import SecLink from "./secLink";
import MarketCard from "./marketCard";
import DirectoryCard from "./directoryCard";
import TableDet from "./DetTable";


export default function Directory(){
    return(
        <div className="px-6 pt-8">
            <div className="w-full text-center mb-10">
                <p className="text-base pb-4">Directory</p>
                <div className="upper-div">
                    <h1 className="text-5xl font-bold uppercase">W.Creators</h1>
                </div>
                <p className="text-base sm:self-end pt-3">Active creators in your country</p>
            </div>
            <div className="directory-cards flex flex-col gap-y-5 md:flex-row md:gap-x-5">
                <DirectoryCard />                
                <DirectoryCard />                
            </div>

            <div className="box-table">
                <TableDet />
            </div>
            <SecLink />
        </div>
    )
}