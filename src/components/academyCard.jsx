import React from "react";

const AcademyCard = () => {
    return(
        <div className="academy-card bg-white w-full rounded-lg overflow-hidden md:last:hidden xl:last:block">
            <img className="rounded-t-lg w-full" src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_255,pg_1,t_base_params,w_453/v1683201849/course-covers/000/005/031/5031-original.jpg?1683201849" alt="" />
            <div className="det p-4">
                <h1 className="text-lg mb-3.5 font-semibold ">Design Systems for Websites using Figma</h1>
                <h4 className="text-base">Learn how to build design systems for visually appealing websites using Figma...</h4>
            </div>
            <div className="price py-4 border-y">
                <div className="px-4 flex justify-between items-center">
                    <p className="">By <span className="">Filip Felbar</span></p>
                    <div className="price-tag flex gap-x-4 items-center">
                        <p className="text-red-600 text-3xl">89<small className="">.89</small></p>
                        <p className="text-neutral-700 font-bold text-3xl">89<small className="">89</small></p>
                    </div>
                </div>
            </div>

            <div className="others py-4">
                <div className="px-4 flex justify-between items-center">
                    <div className="left flex gap-x-4">
                        <div className="students flex flex-col gap-y-2">
                            <p className="text-sm font-semibold">Students</p>
                            <span className="text-sm">2.6K</span>
                        </div>

                        <div className="students flex flex-col gap-y-2">
                            <p className="text-sm font-semibold">Likes</p>
                            <span className="text-sm">2.6K</span>
                        </div>

                        <div className="students flex flex-col gap-y-2">
                            <p className="text-sm font-semibold">Score</p>
                            <span className="bg-yellow-500 w-20 h-1 rounded-lg"></span>
                        </div>
                    </div>
                    <div className="next">
                        <a href="">Next</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcademyCard;

