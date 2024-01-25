import React from "react";



export default function WinnerCard(props){
    return(
        <div className="winner-card">
            <div className="upper relative rounded-md overflow-hidden">
                <div className="hov-sec absolute bg-black bg-opacity-25 inset-0 flex justify-between p-6 items-end opacity-0 hover:opacity-100 cursor-pointer text-white">
                    <div className="left-sec">
                        <p className="text-sm mb-1">Website</p>
                        <p>Fararri Movie</p>
                    </div>
                    
                    <div className="right-sec flex gap-x-3">
                        <a href="">send</a>
                        <a href="">save</a>
                    </div>

                </div>
                <img className="w-full" src={props.crdImg} alt="image" />
            </div>
            <div className="lower flex justify-between pt-4 ">
                <div className="left flex gap-x-2 items-center">
                    <img className="w-5 h-5 rounded-[50px]" src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/965022/614d9fa516e48664985959.png" alt="" />
                    <h1 className="text-base font-semibold flex gap-x-2">Antinomy Studio <small className="flex flex-row text-[8.5px]">Pro</small></h1>
                </div>
                <div className="right-tags flex gap-x-2 text-xs items-center">
                    <div className="flex items-center px-1 py-1 border rounded text-gray-400 border-gray-400 font-semibold uppercase">Dev</div>
                    <div className="flex items-center px-1 py-1 border rounded text-red-400 border-red-400 font-semibold uppercase">sotd</div>
                    
                </div>
                
            </div>
        </div>
    )
}