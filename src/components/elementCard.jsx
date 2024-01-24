import React from "react";


export default function ElementCard(props){
    return(
        <div className="element-card ">
            <div className="main-element">
                <div className="rounded-[16px] w-full relative overflow-hidden">
                    <video className="rounded[16px] w-full"  type="video/mp4"  muted paly loop autoPlay>
                        <source src={props.videoAdd} type="video/mp4" />
                    </video>
                    <div className="extras absolute px-4 pb-2 w-full bottom-2 flex justify-between gap-y-2 text-white">
                        <div className="left w-1/2">
                            <p>Element</p>
                            <h1 className="font-bold">Split Content</h1>
                        </div>
                        <div className="right flex justify-between gap-x-2">
                            <p>Visit</p>
                            <h1>Save</h1>
                        </div>
                    </div>
                </div>
                {props.isExtras ? 
                    <h1 className="font-bold pt-12 text-white">Split content <small>from</small> Scroll</h1>                
                    :
                    <h1 className="hidden font-bold pt-12 text-white">Split content <small>from</small> Scroll</h1>                
                }
            </div>
        </div>
    )
}