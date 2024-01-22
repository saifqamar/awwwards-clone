import React from "react";


export default function Recommendation(){
    return(
        <div className="">
            <div className="px-6">
                <div className="whole-sec mb-12">

                    <div className="rec-cards flex flex-col  gap-y-5 lg:flex-row lg:gap-x-5">
                        <div className="rec-card w-full h-full relative">
                            <div className="imag-div aspect-[16/8] lg:aspect-[16/12] xl:aspect-[16/12] overflow-hidden rounded-[16px]">
                                <img className="w-full" src="https://assets.awwwards.com/assets/redesign/images/pages/home/submit.jpg" alt="" />
                            </div>
                            <div className="details flex flex-col justify-between h-full p-8 lg:p-12 absolute top-0 text-white">
                                <div className="upper">
                                    <p className="text-base pb-4">Share your work</p>
                                    <h1 className="text-3xl pb-6 font-bold lg:text-3xl lg:w-10/12 xl:w-9/12 xl:text-4xl xl:font-semibold xl:leading-[120%]">Submit your website for visibility and recognition</h1>
                                    <button className="px-8 text-xl py-5 border rounded-[8px] hover:bg-white hover:text-aw-color">Submit Website</button>
                                </div>
                                <div className="botom mt-11 lg:mt-8 text-base text-left w-full">
                                    <p>Got questions? Read our FAQs</p>
                                </div>
                            </div>
                        </div>


                        <div className="rec-card w-full h-full relative">
                            <div className="imag-div aspect-[16/8] lg:aspect-auto overflow-hidden rounded-[16px]">
                                <img className="w-full" src="https://assets.awwwards.com/assets/redesign/images/pages/home/submit.jpg" alt="" />
                            </div>
                            <div className="details flex flex-col justify-between h-full p-8 lg:p-12 absolute top-0 text-white">
                                <div className="upper">
                                    <p className="text-base pb-4">Be a Member</p>
                                    <h1 className="text-3xl pb-6 font-bold lg:text-4xl lg:w-7/12">Get access to special pro features</h1>
                                    <button className="px-8 text-xl py-5 border rounded-[8px] hover:bg-white hover:text-aw-color">Be Pro</button>
                                </div>
                                <div className="botom mt-11 text-base text-left">
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