import React from "react";
import AcademyCard from "./academyCard";
import SecLink from "./secLink";
import MarketCard from "./marketCard";
import DirectoryCard from "./directoryCard";
import TableDet from "./DetTable";


export default function Directory(){
    return(
        <div className="px-6 pt-8">
            <div className="w-full text-center mb-10" id="Directory">
                <p className="text-base pb-4">Directory</p>
                <div className="upper-div">
                    <h1 className="relative text-5xl sm:w-6xl md:text-7xl lg:text-9xl xl:text-[150px] 2xl:text-[180px] w-fit mx-auto font-bold uppercase">W.Creators <div className="tag text-blue-600 text-9xl normal-case w-fit absolute -bottom-[130%] xl:-bottom-[30%] -right-[5%] mx-auto px-3 py-3 rounded-lg origin-center -rotate-4">*</div></h1>
                </div>
                <p className="text-base sm:self-end pt-3">Active creators in your country</p>
            </div>
            <div className="directory-cards flex flex-col gap-y-5 md:flex-row md:gap-x-5">
                <DirectoryCard />                
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