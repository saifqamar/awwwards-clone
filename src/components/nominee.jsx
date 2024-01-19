import React from "react";
import NomineeSlider from "./nomineeSlider";
import SecLink from "./secLink";


const NomineeSec = () => {
    return(
        <div className="nominee">
            <div className="px-6 pt-8">
                <div className="w-full text-center mb-10">
                    <p className="text-base pb-4">Latest</p>
                    <div className="upper-div">
                        <h1 className="text-5xl font-bold uppercase">Nominee</h1>
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

