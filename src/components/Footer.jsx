import React from "react";


export default function Footer(){
    return(
        <div className="px-6">
            <div className="whole-footer mt-12 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-40 2xl:mt-48">
                <div className="mb-6 lg:mb-12">
                    <p className="font-bold text-lg pb-7">W.</p>
                    <div className="foot-wrap w-full flex flex-col gap-y-6 lg:flex-row ">
                        <div className="footer-grid grow grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
                            <ul className="foot-menu text-base font-semibold">
                                <li className="mb-2.5"><a href="">Website</a></li>
                                <li><a href="">Collections</a></li>
                            </ul>

                            <ul className="foot-menu py-0 text-base font-semibold">
                                <li className="mb-2.5"><a href="">Academy</a></li>
                                <li><a href="">Jobs</a></li>
                            </ul>

                            <ul className="foot-menu py-0 text-base font-semibold">
                                <li className="mb-2.5"><a href="">Directory</a></li>
                                <li className="mb-2.5"><a href="">Collections</a></li>
                                <li><a href="">Contact us</a></li>
                            </ul>

                            <ul className="foot-menu text-base font-semibold">
                                <li className="mb-2.5"><a href="">FAQs</a></li>
                                <li className="mb-2.5"><a href="" className="mb-2.5">About Us</a></li>
                                <li><a href="" className="">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="box-featured bg-neutral-200 p-8 rounded-[8px]">
                            <div className="content w-full flex justify-start gap-x-2">
                                <p>Next Conference</p>
                                <p>icon</p>
                                <p>Amsterdam</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="foot-bottom border-1 boder-dotted pt-6 mb-24 flex flex-col lg:flex-row lg:justify-between">
                    <div className="flex text-sm py-1 font- gap-x-6">
                        <p>Cookies Policy</p>
                        <p>Cookies Policy</p>
                        <p>Cookies Policy</p>
                    </div>
                    <div className="flex text-sm py-1 gap-x-6 gap-y-2 flex-wrap">
                        <p className="font-bold">Connect:</p>
                        <p>Instagram</p>
                        <p>LinkedIn</p>
                        <p>Twitter</p>
                        <p>Twitter</p>
                        <p>Twitter</p>
                    </div>
                </div>
            </div>
        </div>
    )
}