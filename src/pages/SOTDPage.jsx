import React from "react";
import WinnerCard from "../components/winnerCard";
import Header  from "../components/header";
import Pagination from "../components/pagination";
import NavigationBarPages from "../components/navigationBarPages";


export default function SOTDPage(){
    return(
        <div className="Winners ">
            <div className="px-6">
                <Header />
                <NavigationBarPages  />
                <div className="whole-sec">
                    <div className="headings my-7 sm:my-9 md:my-10 lg:my-12 xl:my-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-1">
                        <h1 className="text-3xl font-semibold">Sites Of The Day</h1>
                        <p className="text-base leading-[190%]">Website design inspiration. Discover the best website designs of the world.
                            Awwwards recognizes the talent and effort of the best designers, 
                            web developers and digital agencies.</p>
                    </div>

                    <div className="winners-cards-sec grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-8 md:gap-x-5 xl:grid-cols-3 ">
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/01/6593f10f8b7c5100889448.jpg"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/01/6593f10f8b7c5100889448.jpg"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/01/6593f10f8b7c5100889448.jpg"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/01/6593f10f8b7c5100889448.jpg"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/01/6593f10f8b7c5100889448.jpg"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/01/6593f10f8b7c5100889448.jpg"} />
                    </div>


                    <div className="pagination">
                        <Pagination />
                    </div>
            

                </div>
            </div>
        </div>        
    )
}