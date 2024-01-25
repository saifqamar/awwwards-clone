import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function NavigationBarPages(){
    const [isOpen , setIsOpen] = useState(false)

    const openNav = () =>{
        setIsOpen(true);
    }

    const closeNav = () =>{
        setIsOpen(false);
    }

    return(
        <div className="fixed bottom-2 lg:bottom-8 w-full z-50 px-5">
                <div className="navigationBar mx-auto container w-auto md:w-[586px] md:min-w-[756px]">
                    <div className={isOpen ? "trans-back w-auto md:w-auto mx-auto flex flex-col gap-y-3 p-3 rounded-xl bg-neutral-900 bg-opacity-50" : "trans-back w-fit md:w-auto mx-auto flex flex-col gap-y-3 p-3 rounded-xl bg-neutral-900 bg-opacity-50"}>
                        
                        {/* Options Menu */}
                        <div className={isOpen ? "above h-[600px] md:h-auto overflow-y-scroll w-full flex flex-col md:flex-row justify-between bg-aw-color rounded-lg p-6 " : "hidden above  flex-row justify-between bg-aw-color rounded-lg p-4 "}>
                            <div className="first-col border-l border-dotted border-neutral-600">
                                <li className="text-neutral-400 pl-3 -ml-3.5 mb-6 text-xs list-disc">Awards</li>
                                <div className="all flex flex-col text-white ">
                                    <Link to="/winners" className="pt-2 pb-2 pl-3 mb-4 text-sm border-neutral-800 hover:border-l hover:transition-all hover:duration-200 hover:border-lime-600">Winners</Link>
                                    <Link to="/nominee" className="pt-2 pb-2 pl-3 mb-4 text-sm border-neutral-800 hover:border-l hover:transition-all hover:duration-200 hover:border-lime-600">Nominees</Link>
                                    <Link to="/sotd" className="pt-2 pb-2 pl-3 mb-4 text-sm border-neutral-800 hover:border-l hover:transition-all hover:duration-200 hover:border-lime-600">Sites of day</Link>
                                    <Link to="/sotm" className="pt-2 pb-2 pl-3 mb-4 text-sm border-neutral-800 hover:border-l hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                                </div>
                            </div>

                            <div className="sec-col">
                                <div className="Inspiration pl-3 border-l border-dotted border-neutral-600">
                                    <li className="text-neutral-400 -ml-3.5 mb-6 text-xs list-disc">Inspiration</li>
                                    <div className="all flex flex-col text-white pl-3">
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Winners</a>
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Nominees</a>
                                    </div>
                                </div>

                                <div className="Academy pl-3 border-l border-dotted border-neutral-600">
                                    <li className="text-neutral-400 -ml-3.5 mb-6 text-xs list-disc">Academy</li>
                                    <div className="all flex flex-col text-white pl-3">
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Winners</a>
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Nominees</a>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="third-col">
                                <div className="Inspiration pl-3 border-l border-dotted border-neutral-600">
                                    <li className="text-neutral-400 -ml-3.5 mb-6 text-xs list-disc">Inspiration</li>
                                    <div className="all flex flex-col text-white pl-3">
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Winners</a>
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Nominees</a>
                                    </div>
                                </div>

                                <div className="Academy pl-3 border-l border-dotted border-neutral-600">
                                    <li className="text-neutral-400 -ml-3.5 mb-6 text-xs list-disc">Academy</li>
                                    <div className="all flex flex-col text-white pl-3">
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Winners</a>
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Nominees</a>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="fourth-col">
                                <div className="Inspiration pl-3 border-l border-dotted border-neutral-600">
                                    <li className="text-neutral-400 -ml-3.5 mb-6 text-xs list-disc">Inspiration</li>
                                    <div className="all flex flex-col text-white pl-3">
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Winners</a>
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Nominees</a>
                                    </div>
                                </div>

                                <div className="Academy pl-3 border-l border-dotted border-neutral-600">
                                    <li className="text-neutral-400 -ml-3.5 mb-6 text-xs list-disc">Academy</li>
                                    <div className="all flex flex-col text-white pl-3">
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Winners</a>
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Nominees</a>
                                    </div>
                                </div>

                                
                            </div>
                        </div>

                        {/* Main Nav Bar */}
                        <div className="below rounded-lg  w-auto flex flex-row gap-x-3 justify-between h-[60px]">
                            <div className={isOpen ? "left bg-aw-color rounded-lg w-full md:w-full justify-around px-5 flex flex-row items-center gap-x-2 text-white"  : "left bg-aw-color rounded-lg w-[140px] justify-around px-5 flex flex-row items-center gap-x-2 text-white" }> 
                                <div className="left gap-x-2 w-full flex items-center  justify-between">
                                    <p className="font-semibold">w.home</p>
                                    <img className={isOpen ? 'hidden' : 'h-5 w-auto block cursor-pointer'} src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png" onClick={openNav} />
                                </div>
                                <div className={isOpen ? "close text-white cursor-pointer" : "close text-white hidden"} onClick={closeNav}>x</div>
                            </div>
                            
                            <div className={isOpen ? " links hidden right justify-between gap-x-2 rounded-lg bg-neutral-700 " : "right md:flex  hidden md:w-10/12 rounded-lg bg-neutral-700 "}>
                                <a href="">
                                    <p className="px-2 text-base font-bold flex items-center rounded-lg h-full text-neutral-400">Filters</p>
                                </a>

                                <a href="#Awards">
                                    <p className=" text-sm font-semibold flex items-center hover:bg-slate-600 h-full w-full text-neutral-400 px-4">Awards <span>i</span></p>
                                </a>

                                <a href="#Popular">
                                    <p className="px-2 text-sm font-semibold flex items-center border border-neutral-500 hover:border-neutral-300 rounded-lg h-full text-neutral-400">Popular <span>i</span></p>
                                </a>

                                <a href="#Countries">
                                    <p className="px-2 text-sm font-semibold flex items-center border border-neutral-500 hover:border-neutral-300 rounded-lg h-full text-neutral-400">Countries <span>i</span></p>
                                </a>

                                <a href="#Font">
                                    <p className="px-2 text-sm font-semibold flex items-center border border-neutral-500 hover:border-neutral-300 rounded-lg h-full text-neutral-400">Font <span>i</span></p>
                                </a>

                                <a href="#ColorCategories">
                                    <p className="px-2 text-sm font-semibold flex items-center border border-neutral-500 hover:border-neutral-300 rounded-lg h-full text-neutral-400">Font <span>i</span></p>
                                </a>

                                <a href="#Categories">
                                    <p className="px-2 text-sm font-semibold flex items-center border border-neutral-500 hover:border-neutral-300 rounded-lg h-full text-neutral-400">Font <span>i</span></p>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            
        </div>
        
    )
}