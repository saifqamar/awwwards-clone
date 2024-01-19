import React from "react";
import AcademyCard from "./academyCard";
import ElementCard from "./elementCard";
import SecLink from "./secLink";


export default function Elements(){
    return(
        <div className="">
            <div className="px-6">
                <div className="whole-sec px-10 lg:px-20 py-9 lg:py-20 rounded-[16px] bg-aw-color">
                    <h1 className="mb-2.5 text-center text-white">Inspirational elements</h1>
                    <h1 className="text-3xl lg:text-8xl uppercase lg:py-8 font-bold mb-8 text-center text-white">Element of <br /> the Day</h1>

                    <div className="element-cards flex flex-col gap-y-6">
                        
                        <ElementCard  isExtras={true} videoAdd={'https://assets.awwwards.com/awards/element/2024/01/659bccae7f52c684463396.mp4'}/>

                        <div className="discover pt-20">
                            <h1 className="mb-2.5 text-center text-white pb-7">Discover a huge selection of inspiring elements</h1>
                            <div className="other-elements lg:my-11 flex flex-col gap-y-4 lg:flex-row lg:gap-x-5">
                                <ElementCard  isExtras={false} videoAdd={'https://assets.awwwards.com/awards/element/2022/08/63050055364e8120812579.mp4'}/>
                                <ElementCard  isExtras={false} videoAdd={'https://assets.awwwards.com/awards/element/2022/08/63050055364e8120812579.mp4'}/>
                                <ElementCard  isExtras={false} videoAdd={'https://assets.awwwards.com/awards/element/2022/08/63050055364e8120812579.mp4'}/>
                                <ElementCard  isExtras={false} videoAdd={'https://assets.awwwards.com/awards/element/2022/08/63050055364e8120812579.mp4'}/>
                            </div>

                        </div>

                        <div className="view-el text-white text-center">
                          <a href=""><span className="font-bold text-lg border-b-2 border-neutral-600 ">--View Nominees</span></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}