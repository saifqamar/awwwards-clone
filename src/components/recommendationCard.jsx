import React from "react";


export default function RecommendationCard(){
    return(
        <div className="rec-card w-full h-80 min-h-80 max-h-[580px] lg:h-auto relative">
            <div className="imag-div h-full box-border lg:w-full lg:aspect-[16/12] xl:aspect-[16/12] overflow-hidden rounded-[16px]">
                <img className="w-full h-full object-cover" src="https://assets.awwwards.com/assets/redesign/images/pages/home/submit.jpg" alt="" />
            </div>
            <div className="details flex flex-col justify-between h-full py-5 px-6 sm:p-8 md:p-10 lg:p-12 absolute top-0 text-white">
                <div className="upper">
                    <p className="text-base pb-4">Share your work</p>
                    <h1 className="text-xl sm:text-3xl md:text-4xl pb-4 md:pb-6 font-bold lg:text-3xl lg:w-10/12 xl:w-7/12 2xl:2-5/12 xl:text-4xl 2xl:text-5xl xl:font-semibold xl:leading-[120%] 2xl:leading-[130%]">Submit your website for visibility and recognition</h1>
                    <button className="text-base px-6 py-4 md:px-8 md:py-5 border rounded-[8px] hover:bg-white hover:text-aw-color">Submit Website</button>
                </div>
                <div className="botom mt-5 lg:mt-8 xl:mt-11 text-base text-left w-full">
                    <p className="w-full text-right">Got questions? Read our FAQs</p>
                </div>
            </div>
        </div>
    )
}