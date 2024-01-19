import React from "react";

const MarketCard = () => {
    return(
        <div className="market-card bg-white w-full rounded-lg overflow-hidden md:last:hidden xl:last:block">
            <img className="rounded-t-lg w-full" src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_255,pg_1,t_base_params,w_453/v1683201849/course-covers/000/005/031/5031-original.jpg?1683201849" alt="" />
            <div className="det p-4">
                <h4 className="text-base">Digital Product</h4>
                <h1 className="text-lg mb-3.5 font-semibold ">Lucid Portfolio</h1>
            </div>
            <div className="price py-4 border-y">
                <div className="px-4 flex justify-between items-center">
                    <p className="">By <span className="font-semibold">Filip Felbar</span></p>
                    <div className="price-tag flex gap-x-1 items-start">
                        <p className="text-sm">From</p>
                        <p className="text-neutral-700 font-bold text-3xl">89</p>
                        <small className="text-sm">USD</small>
                    </div>
                </div>
            </div>

            <div className="others py-4">
                <div className="px-4 flex justify-between items-center">
                    <div className="left flex gap-x-4">
                        <div className="students flex flex-col gap-y-2">
                            <p className="text-sm font-semibold">View Product</p>
                            
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

export default MarketCard;

