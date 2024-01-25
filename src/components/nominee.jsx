import React from "react";
import NomineeSlider from "./nomineeSlider";
import SecLink from "./secLink";


const NomineeSec = () => {
    return(
        <div className="nominee" id="Nominee">
            <div className="px-6 pt-12 sm:pt-16 md:pt-24 lg:pt-32 xl:pt-40 2xl:pt-48">
                <div className="w-full text-center mb-6 sm:mb-10 md:mb-14 xl:mb-16 2xl:mb-20 ">
                    <p className="text-base pb-4">Latest</p>
                    <div className="upper-div">
                        <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[150px] 2xl:text-[180px] w-fit mx-auto  font-bold uppercase">Nominee <div className="tag text-lg normal-case w-fit absolute -bottom-[5%] -right-[5%] mx-auto px-3 py-3 rounded-lg origin-center -rotate-45  bg-yellow-400">Cool Sites!</div></h1>
                    </div>
                    <p className="text-base sm:self-end pt-3">Vote for the latest websites on awwwards</p>
                </div>
                <div className="nominee-cards">
                    {/* <img className="rounded-lg" src="https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/01/659ef087a41bc827547067.png" alt="" /> */}
                    <NomineeSlider />
                </div>
                <SecLink />
            </div>

        </div>
    )
}

export default NomineeSec;

