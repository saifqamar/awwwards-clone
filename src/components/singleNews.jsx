import React from "react";

const SingleNews = () => {
    return(
        <div className="py-6 px-3 border-t">
            <div className="main-det flex justify-between items-center gap-x-4">
                <img className="w-10 h-10 rounded-[50px]" src="https://assets.awwwards.com/awards/media/cache/square_thumb_140/element/2024/01/6594b2b0d50a8706674037_static.jpeg" alt="" />
                <div className="grow">
                    <p className="text-light text-base">Element of the Day</p>
                    <h1 className="font-bold text-lg">Animated flip menu</h1>
                </div>

                <div className="w-fit px-1 py-1 bg-aw-color rounded-[4px] ">
                    <p className="text-white font-semibold text-sm">FRESH</p>
                </div>
            </div>
        </div>
    )
}

export default SingleNews;