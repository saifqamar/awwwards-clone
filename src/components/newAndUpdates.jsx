import React from "react";
import SingleNews from "./singleNews";



const News = () =>{
    return(
        <div className="news">
            <div className="px-6 pt-8">
                <p className="text-base pb-4">News and Updates</p>
                <div className="upper-div flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 ">
                    <h1 className="text-2xl font-bold">Follow what's brand new in digital design.</h1>
                    <p className="text-base sm:self-end">Don't miss the latest happenings on <b>awwwards.</b></p>
                </div>
            </div>

            <div className="whole-news-sec flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap">

                <div className="w-news px-6 pt-8 grow xl:grow-0 xl:w-1/3">
                    <p className="pb-6 font-bold text-base">w.news</p>
                    <SingleNews />
                    <SingleNews />
                    <SingleNews />
                    <SingleNews />    
                </div>

                <div className="w-news px-6 pt-8 grow xl:grow-0 xl:w-1/3">
                    <p className="pb-6 font-bold text-base">w.creators - close to you</p>
                    <SingleNews />
                    <SingleNews />
                    <SingleNews />
                    <SingleNews />    
                </div>

                <div className="w-news px-6 pt-8 pb-8 xl:w-1/3">
                    <p className="pb-6 font-bold text-base">Featured</p>
                    <div className="py-6 w-full relative border-t flex flex-col">
                        <div className="w-full">
                            <img className="rounded-lg w-auto" src="https://assets.awwwards.com/awards/659e545108ea68.49415390.png" alt="" />
                        </div>
                        <div className="card-det py-6">
                            <p>Honor Nominees!</p>
                            <h1 className="text-lg font-bold">6 new honors to celebrate Web Design Excellence.</h1>
                        </div>
                    </div>
                       
                </div>
            </div>

        </div>
    )
}

export default News;