import React from "react";
import WinnerCard from "../components/winnerCard";
import Header  from "../components/header";
import Pagination from "../components/pagination";
import NavigationBarPages from "../components/navigationBarPages";


export default function NomineePage(){
    return(
        <div className="Winners ">
                <div className="fixed w-full bg-white z-50 px-6 top-0">
                    <Header />
                </div>
            <div className="px-6" id="SOTD">
                <NavigationBarPages />
                <div className="whole-sec pt-12">
                    <div className="headings my-7 sm:my-9 md:my-10 lg:my-12 xl:my-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-1">
                        <h1 className="text-3xl font-semibold">Nominee websites</h1>
                        <p className="text-base leading-[190%]">Website design inspiration. Discover the best website designs of the world.
                            Awwwards recognizes the talent and effort of the best designers, 
                            web developers and digital agencies.</p>
                    </div>

                    <div className="winners-cards-sec grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-8 md:gap-x-5 xl:grid-cols-3 ">
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/01/65aa66508b41e298311111.png"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/01/65aa66508b41e298311111.png"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/01/65aa66508b41e298311111.png"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/01/65aa66508b41e298311111.png"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/01/65aa66508b41e298311111.png"} />
                        <WinnerCard crdImg={"https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/01/65aa66508b41e298311111.png"} />
                    </div>


                    <div className="pagination">
                        <Pagination />
                    </div>
            

                </div>
            </div>
        </div>        
    )
}