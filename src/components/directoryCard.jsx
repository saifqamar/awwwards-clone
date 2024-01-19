import React from "react";
import DirectorySlider from "./directorySlider";


export default function DirectoryCard(){

    return(
        <div className="directory-card academy-card bg-white w-full rounded-[12px] overflow-hidden">
            <div className="whole-sec bg-aw-color p-6">
                <div className="upper w-full flex space-between">
                    <img className="w-8 h-8 rounded-[50px] " src="https://assets.awwwards.com/awards/media/cache/thumb_user_retina/avatar/91066/597919b30ec0c.png" alt="" />
                    <div className="grow"></div>
                    <section className="w-3/6 aspect-[16/12]">
                        <DirectorySlider />
                        
                    </section>
                    
                </div>

                <div className="details flex justify-between mt-8 ">
                    <div className="up-sec">
                        <p className="text-sm text-white">International</p>
                        <h1 className="text-3xl font-bold text-white">Isadora Digital Agency</h1>
                    </div>
                    <div className="works border border-gray-600 self-end mt-4 px-3.5 py-2 rounded-lg">
                        <p className="text-sm text-white">Works</p>
                        <p className="font-bold text-3xl text-white h-fit">32</p>
                    </div>
                </div>
                    <div className="last-sec mt-16 flex justify-between">
                        <p className="text-sm text-white">IsadoraDigital.com</p>
                        <p className="text-sm text-white">12 awards</p>
                    </div>
            </div>
        </div>                

    )
}
