import React from "react";
import SingleNews from "./singleNews";



const News = () =>{
    return(
        <div className="news">
            <div className="px-6 lg:px-10 pt-8 sm:pt-10 md:pt-16 lg:pt-20 lg:mb-12 xl:mb-24">
                <p className="text-sm pb-4 lg:pb-8">News and Updates</p>
                <div className="upper-div flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 ">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl sm:w-4/12 md:w-4/12 lg:w-3/12 font-bold">Follow what's brand new in digital design.</h1>
                    <p className="text-base sm:self-end text-right sm:w-8/12 md:w-8/12 lg:w-9/12">Don't miss the latest happenings on <b>awwwards.</b></p>
                </div>
            </div>

            <div className="whole-news-sec flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap">

                <div className="w-news px-6 lg:px-10 pt-8 grow xl:grow-0 xl:w-1/3">
                    <p className="pb-6 font-bold text-base">w.news</p>
                    <SingleNews />
                    <SingleNews />
                    <SingleNews />
                    <SingleNews />    
                </div>

                <div className="w-news px-6 pt-8 lg:px-10 grow xl:grow-0 xl:w-1/3">
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