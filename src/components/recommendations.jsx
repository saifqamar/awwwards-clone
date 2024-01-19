import React from "react";


export default function Recommendation(){
    return(
        <div className="">
            <div className="px-6">
                <div className="whole-sec mb-12">

                    <div className="rec-cards flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
                        <div className="rec-card w-full aspect-[16/8] rounded-[16px] overflow-hidden relative">
                            <img className="" src="https://assets.awwwards.com/assets/redesign/images/pages/home/submit.jpg" alt="" />
                            <div className="details m-6 absolute top-0 text-white">
                                <div className="upper">
                                    <p className="text-base pb-4">Share your work</p>
                                    <h1 className="text-3xl pb-6 font-bold">Submit your website for visibility and recognition</h1>
                                    <button className="px-8 text-xl py-5 border rounded-[8px] hover:bg-white hover:text-aw-color">Submit Website</button>
                                </div>
                                <div className="botom mt-11 text-base">
                                    <p>Got questions? Read our FAQs</p>
                                </div>
                            </div>
                        </div>

                        <div className="rec-card w-full aspect-[16/8] rounded-[16px] overflow-hidden relative">
                            <img className="" src="https://assets.awwwards.com/assets/redesign/images/pages/home/submit.jpg" alt="" />
                            <div className="details m-6 absolute top-0 text-white">
                                <div className="upper">
                                    <p className="text-base pb-4">Be a Member</p>
                                    <h1 className="text-3xl pb-6 font-bold">Get access to special pro features</h1>
                                    <button className="px-8 text-xl py-5 border rounded-[8px] hover:bg-white hover:text-aw-color">Be Pro</button>
                                </div>
                                <div className="botom mt-11 text-base">
                                    <p>Got questions? Read our FAQs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}