import React from "react";
import Header from "../components/header";
import WinnerCard from "../components/winnerCard";
import Pagination from "../components/pagination";




export default function Winners(){
    return(
        <div className="Winners ">
            <div className="px-6" id="SOTD">
                <Header />

                <div className="whole-sec">
                    <div className="headings my-7 sm:my-9 md:my-10 lg:my-12 xl:my-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-1">
                        <h1 className="text-3xl font-semibold">Winning websites</h1>
                        <p className="text-base leading-[190%]">Website design inspiration. Discover the best website designs of the world.
                            Awwwards recognizes the talent and effort of the best designers, 
                            web developers and digital agencies.</p>
                    </div>

                    <div className="winners-cards-sec grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-8 md:gap-x-5 xl:grid-cols-3 ">
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/01/659bc791b5360978477976.jpg"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/01/659bc791b5360978477976.jpg"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/01/659bc791b5360978477976.jpg"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/01/659bc791b5360978477976.jpg"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/01/659bc791b5360978477976.jpg"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/01/659bc791b5360978477976.jpg"} />
                    </div>


                    <div className="pagination">
                        <Pagination />
                    </div>
            

                </div>
            </div>
        </div>
    )
}