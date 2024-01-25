import React, { useState } from "react";

import { Link } from "react-router-dom";
import PageNavMenu from "./Navs/PageNavMenu";

export default function NavigationBarPages(){
    const [isOpen , setIsOpen] = useState(false)
    const [isPageNavOpen, setIsPageNavOpen] = useState(false)
    const [isPopularNavOpen, setIsPopularNavOpen] = useState(false)



    const openNav = () =>{
        setIsOpen(true);
        setIsPageNavOpen(false);
    }

    const closeNav = () =>{
        setIsOpen(false);
    }

    const openNavPage = () =>{
        setIsPageNavOpen(!isPageNavOpen);
        setIsOpen(false);
        setIsPopularNavOpen(false);
    }



    return(
        <div className="fixed bottom-2 lg:bottom-8 w-full z-50 px-4 mx-auto">
                <div className="navigationBar mx-auto container  md:max-w-[926px]">
                    <div className={isOpen ? "trans-back w-full lg:w-auto mx-auto flex flex-col gap-y-3 p-1.5 rounded-xl bg-neutral-900 bg-opacity-50" : "trans-back w-fit lg:w-auto mx-auto flex flex-col gap-y-3 p-1.5 rounded-xl bg-neutral-900 bg-opacity-50"}>
                        
                        {/* Options Menu */}
                        <div className={isOpen ? "above h-[600px] md:h-auto overflow-y-scroll w-full flex flex-col md:flex-row justify-between bg-aw-color rounded-lg p-6 " : "hidden above  flex-row justify-between bg-aw-color rounded-lg p-4 "}>
                            <div className="whole-sec">
                                <p className="text-neutral-400 pl-3 pb-3 border-b-2 border-neutral-400 -ml-3.5 mb-6 text-xs list-disc">Awards</p>
                                
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

                        {/* First Page Nav Options Menu */}
                        <div className={isPageNavOpen ? "above h-[600px] md:h-auto overflow-y-scroll w-full bg-aw-color rounded-lg p-6 " : "hidden above  flex-row justify-between bg-aw-color rounded-lg p-4 "}>
                            
                            <p className="text-neutral-500  pb-3 border-b border-neutral-600 mb-6 text-xs list-disc">Awards</p>

                            <div className="all-cols flex flex-col md:flex-row justify-between">
                                <div className="all flex flex-col text-white ">
                                    <Link to="/winners" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Winners</Link>
                                    <Link to="/nominee" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Nominees</Link>
                                    <Link to="/sotd" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Sites of day</Link>
                                    <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                                </div>

                                <div className="all flex flex-col text-white ">
                                    <Link to="/winners" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Winners</Link>
                                    <Link to="/nominee" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Nominees</Link>
                                    <Link to="/sotd" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Sites of day</Link>
                                    <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                                </div>

                                <div className="all flex flex-col text-white ">
                                    <Link to="/winners" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Winners</Link>
                                    <Link to="/nominee" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Nominees</Link>
                                    <Link to="/sotd" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Sites of day</Link>
                                    <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                                </div>

                                
                                
                            </div>

                            
                        </div>
                         
                         {/* Second Nav Option */}

                         <div className={isPopularNavOpen ? "above h-[600px] md:h-auto overflow-y-scroll w-full bg-aw-color rounded-lg p-6 " : "hidden above  flex-row justify-between bg-aw-color rounded-lg p-4 "}>
                            
                            <div className="w-full h-full mb-4 relative grow">
                                <p className="absolute inset-y-0 top-3 right-4 text-neutral-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </p> 
                                <input className="w-full py-3 bg-neutral-700 px-4 pr-10 rounded-lg" type="text" placeholder="Search in Inspiration" />
                            </div>
                            
                            
                            <p className="text-neutral-500  pb-3 border-b border-neutral-600 mb-6 text-xs list-disc">Categories</p>

                            <div className="all-cols flex flex-col md:flex-row justify-between">
                                <div className="all flex flex-col text-white ">
                                    <Link to="/winners" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Winners</Link>
                                    <Link to="/nominee" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Nominees</Link>
                                    <Link to="/sotd" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Sites of day</Link>
                                    <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                                </div>

                                <div className="all flex flex-col text-white ">
                                    <Link to="/winners" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Winners</Link>
                                    <Link to="/nominee" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Nominees</Link>
                                    <Link to="/sotd" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Sites of day</Link>
                                    <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                                </div>

                                <div className="all flex flex-col text-white ">
                                    <Link to="/winners" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Winners</Link>
                                    <Link to="/nominee" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Nominees</Link>
                                    <Link to="/sotd" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Sites of day</Link>
                                    <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                                </div>

                                
                                
                            </div>

                            
                        </div>


                        {/* Main Nav Bar */}
                        <div className="below rounded-lg  w-auto flex flex-row gap-x-2 justify-between h-[60px]">
                            <div className={isOpen ? "left bg-aw-color rounded-lg w-full md:w-full justify-around px-5 flex flex-row items-center gap-x-2 text-white"  : "left bg-aw-color rounded-lg w-[200px] justify-around px-5 flex flex-row items-center gap-x-2 text-white" }> 
                                <div className="left gap-x-2 w-full flex items-center  justify-between">
                                    <p className="font-semibold flex">w. <span className="text-yellow-500">awards.</span> <span className="font-regular">SOTMs</span></p>
                                    <img className={isOpen ? 'hidden' : 'h-5 w-auto block cursor-pointer'} src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png" onClick={openNav} />
                                </div>
                                <div className={isOpen ? "close text-white cursor-pointer" : "close text-white hidden"} onClick={closeNav}>x</div>
                            </div>
                            
                            <div className={isOpen ? " links hidden right justify-between gap-x-2 rounded-lg bg-neutral-700 " : "right lg:flex  hidden  rounded-lg bg-neutral-700 "}>
                                <a href="">
                                    <p className="px-2 text-base font-bold flex items-center rounded-lg h-full text-neutral-400">Filters</p>
                                </a>

                                <a href="#Awards">
                                    <p onClick={openNavPage} className=" text-sm font-semibold flex items-center border-t-2 border-yellow-500 hover:bg-neutral-800 h-full w-full text-neutral-400 px-4">Awards 
                                    {isPageNavOpen ? 

                                        <span className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>

                                        </span>

                                     :

                                        <span className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    }
                                    
                                    </p>
                                </a>

                                <a href="#Popular">
                                    <p onClick={() => {
                                        setIsPopularNavOpen(!isPopularNavOpen);
                                        if(isPopularNavOpen){
                                            setIsPageNavOpen(false);
                                            setIsOpen(false)
                                        }
                                    }} className={isPopularNavOpen ? " text-sm font-semibold flex items-center bg-neutral-800 h-full w-full text-neutral-400 px-3" : " text-sm font-semibold flex items-center px-3 hover:bg-neutral-800 h-full w-full text-neutral-400"}>
                                        Popular 
                                    {isPopularNavOpen ? 

                                        <span className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>

                                        </span>

                                     :

                                        <span className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    }
                                    
                                    </p>
                                </a>

                                <a href="#Countries">
                                    <p onClick={() => {
                                        setIsPopularNavOpen(!isPopularNavOpen);
                                        if(isPopularNavOpen){
                                            setIsPageNavOpen(false);
                                            setIsOpen(false)
                                        }
                                    }} className={isPopularNavOpen ? " text-sm font-semibold flex items-center bg-neutral-800 h-full w-full text-neutral-400 px-3" : " text-sm font-semibold flex items-center px-3 hover:bg-neutral-800 h-full w-full text-neutral-400"}>
                                        Countries 
                                    {isPopularNavOpen ? 

                                        <span className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>

                                        </span>

                                     :

                                        <span className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    }
                                    
                                    </p>
                                </a>

                                <a href="#Font">
                                    <p onClick={() => {
                                        setIsPopularNavOpen(!isPopularNavOpen);
                                        if(isPopularNavOpen){
                                            setIsPageNavOpen(false);
                                            setIsOpen(false)
                                        }
                                    }} className={isPopularNavOpen ? " text-sm font-semibold flex items-center bg-neutral-800 h-full w-full text-neutral-400 px-3" : " text-sm font-semibold flex items-center px-3 hover:bg-neutral-800 h-full w-full text-neutral-400"}>
                                        Font 
                                    {isPopularNavOpen ? 

                                        <span className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>

                                        </span>

                                     :

                                        <span className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    }
                                    
                                    </p>
                                </a>

                                <a href="#Colors">
                                    <p onClick={() => {
                                        setIsPopularNavOpen(!isPopularNavOpen);
                                        if(isPopularNavOpen){
                                            setIsPageNavOpen(false);
                                            setIsOpen(false)
                                        }
                                    }} className={isPopularNavOpen ? " text-sm font-semibold flex items-center bg-neutral-800 h-full w-full text-neutral-400 px-3" : " text-sm font-semibold flex items-center px-3 hover:bg-neutral-800 h-full w-full text-neutral-400"}>
                                        Colors 
                                    {isPopularNavOpen ? 

                                        <span className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>

                                        </span>

                                     :

                                        <span className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    }
                                    
                                    </p>
                                </a>

                                <a href="#Categories">
                                    <p onClick={() => {
                                        setIsPopularNavOpen(!isPopularNavOpen);
                                        if(isPopularNavOpen){
                                            setIsPageNavOpen(false);
                                            setIsOpen(false)
                                        }
                                    }} className={isPopularNavOpen ? " text-sm font-semibold flex items-center bg-neutral-800 h-full w-full text-neutral-400 px-3" : " text-sm font-semibold flex items-center px-3 hover:bg-neutral-800 h-full w-full text-neutral-400"}>
                                        Categories 
                                    {isPopularNavOpen ? 

                                        <span className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>

                                        </span>

                                     :

                                        <span className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    }
                                    
                                    </p>
                                </a>
                            
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            
        </div>
        
    )
}