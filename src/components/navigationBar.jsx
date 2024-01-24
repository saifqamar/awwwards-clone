import React, { useState } from "react";

export default function NavigationBar(){
    const [isOpen , setIsOpen] = useState(false)

    const openNav = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <div className=" absolute w-full right-0 flex justify-center z-50">
            <div className=" h-screen bg-none fixed">
                <div className="navigationBar  translate-y-2/4 w-[556px] min-w-[656px]">
                    <div className="trans-back flex flex-col gap-y-3 p-3 rounded-xl bg-neutral-900 bg-opacity-50">
                        <div className={isOpen ? "above flex flex-row justify-between bg-aw-color rounded-lg p-4 " : "hidden above flex flex-row justify-between bg-aw-color rounded-lg p-4 "}>
                            <div className="first-col pl-3 border-l border-dotted border-neutral-600">
                                <li className="text-white -ml-3.5 mb-6 text-xs list-disc">Awards</li>
                                <div className="all flex flex-col text-white pl-3">
                                    <a href="" className="pt-2 pb-2 mb-4 text-sm">Winners</a>
                                    <a href="" className="pt-2 pb-2 mb-4 text-sm">Nominees</a>
                                    <a href="" className="pt-2 pb-2 mb-4 text-sm">Sites of day</a>
                                    <a href="" className="pt-2 pb-2 mb-4 text-sm">Winners</a>
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
                                    <li className="text-white -ml-3.5 mb-6 text-xs list-disc">Academy</li>
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
                                    <li className="text-white -ml-3.5 mb-6 text-xs list-disc">Academy</li>
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
                                    <li className="text-white -ml-3.5 mb-6 text-xs list-disc">Academy</li>
                                    <div className="all flex flex-col text-white pl-3">
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Winners</a>
                                        <a href="" className="pt-2 pb-2 mb-4 text-sm">Nominees</a>
                                    </div>
                                </div>

                                
                            </div>
                        </div>


                        <div className="below bg-aw-color  rounded-lg flex flex-row justify-between h-[60px]">
                            <div className="left rounded-lg w-full justify-between px-5 flex flex-row items-center gap-x-2 text-white"> 
                                <div className="left gap-x-4 flex justify-between" onClick={openNav}>
                                    <p>w.home</p>
                                    <p>---</p>
                                </div>
                                <div className={isOpen ? "close text-white" : "close text-white hidden"}>x</div>
                            </div>
                            
                            <div className={isOpen ? " hidden right flex justify-between gap-x-2 rounded-lg bg-neutral-700 p-2" : "right flex justify-between gap-x-2 rounded-lg w-9/12 bg-neutral-700 p-2"}>
                                <a href="">
                                    <p className="px-2 text-base font-semibold flex items-center border border-neutral-500 rounded-lg h-full text-neutral-400">Home</p>
                                </a>

                                <a href="">
                                    <p className="px-2 text-base font-semibold flex items-center border border-neutral-500 rounded-lg h-full text-neutral-400">SOTD</p>
                                </a>

                                <a href="">
                                    <p className="px-2 text-base font-semibold flex items-center border border-neutral-500 rounded-lg h-full text-neutral-400">Nominees</p>
                                </a>

                                <a href="">
                                    <p className="px-2 text-base font-semibold flex items-center border border-neutral-500 rounded-lg h-full text-neutral-400">Directory</p>
                                </a>

                                <a href="">
                                    <p className="px-2 text-base font-semibold flex items-center border border-neutral-500 rounded-lg h-full text-neutral-400">Collection</p>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}