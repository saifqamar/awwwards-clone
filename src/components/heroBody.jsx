import React from "react";
import siteofd from '../siteofd.svg';



const HeroBody =() =>{
    return(
        <div>
            <img src={siteofd} className="py-5 w-full" alt="site of the day" />
            <marquee className="text-xl pb-5">-<strong>Post Familiar Wine</strong>- Site of the Day - <strong>7.26</strong> - Jan 18, 2024 -</marquee>
            <div className="h-image aspect-[16/12] sm:aspect-auto rounded-lg overflow-hidden relative">
                <img className="w-full h-full object-cover" src="https://assets.awwwards.com/awards/sites_of_the_day/2024/01/postfamiliar-cover.jpg" alt="" />

                <div className="extra-det absolute bottom-4 left-4">
                    <span className="text-white text-lg">By</span>
                    <h1 className="text-white text-3xl font-semibold">Jordan Wine</h1>
                </div>

            </div>

            <div className="name-maker w-full flex py-8 justify-center items-center">
                <div className="maker-img rounded-[50px] w-8 h-8 overflow-hidden">
                    <img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/default/user7.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroBody;
