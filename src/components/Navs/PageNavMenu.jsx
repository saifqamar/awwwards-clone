import React from "react";
import { Link } from "react-router-dom";


export default function PageNavMenu(props){
    return(
        <>
            {/* Awards withouT search bar */}
            <div className={props.isAwardNavOpen ? "above h-[600px] md:h-auto overflow-y-scroll md:overflow-auto w-full bg-aw-color rounded-lg p-6 " : "hidden above  flex-row justify-between bg-aw-color rounded-lg p-4 "}>
                                
                
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
            

            {/* Popular section With Search Bar */}
            <div className={props.isPopularNavOpen ? "above h-[600px] md:h-auto overflow-y-scroll md:overflow-auto w-full bg-aw-color rounded-lg p-6 " : "hidden above  flex-row justify-between bg-aw-color rounded-lg p-4 "}>
                                
                <div className="w-full h-full mb-4 relative grow">
                    <p className="absolute inset-y-0 top-3 right-4 text-neutral-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </p> 
                    <input className="w-full py-3 bg-neutral-700 px-4 pr-10 rounded-lg" type="text" placeholder="Search in Inspiration" />
                </div>

                <p className="text-neutral-500  pb-3 border-b border-neutral-600 mb-6 text-xs list-disc">Categories</p>

                <div className="all-cols flex flex-col md:flex-row h-[300px] overflow-y-scroll justify-between">
                    <div className="all flex flex-col text-white ">
                        <Link to="/winners" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Winners</Link>
                        <Link to="/nominee" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Nominees</Link>
                        <Link to="/sotd" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Sites of day</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
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

            {/* Country section With Search Bar */}
            <div className={props.isCountryNavOpen ? "above h-[600px] md:h-auto overflow-y-scroll md:overflow-auto w-full bg-aw-color rounded-lg p-6 " : "hidden above  flex-row justify-between bg-aw-color rounded-lg p-4 "}>
                                
                <div className="w-full h-full mb-4 relative grow">
                    <p className="absolute inset-y-0 top-3 right-4 text-neutral-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </p> 
                    <input className="w-full py-3 bg-neutral-700 px-4 pr-10 rounded-lg" type="text" placeholder="Search in Inspiration" />
                </div>

                <p className="text-neutral-500  pb-3 border-b border-neutral-600 mb-6 text-xs list-disc">Country</p>

                <div className="all-cols flex flex-col md:flex-row h-[300px] overflow-y-scroll justify-between">
                    <div className="all flex flex-col text-white ">
                        <Link to="/winners" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Winners</Link>
                        <Link to="/nominee" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Nominees</Link>
                        <Link to="/sotd" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Sites of day</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
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
            
            {/* Font section With Search Bar */}
            <div className={props.isFontNavOpen ? "above h-[600px] md:h-auto overflow-y-scroll md:overflow-auto w-full bg-aw-color rounded-lg p-6 " : "hidden above  flex-row justify-between bg-aw-color rounded-lg p-4 "}>
                                
                <div className="w-full h-full mb-4 relative grow">
                    <p className="absolute inset-y-0 top-3 right-4 text-neutral-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </p> 
                    <input className="w-full py-3 bg-neutral-700 px-4 pr-10 rounded-lg" type="text" placeholder="Search in Inspiration" />
                </div>

                <p className="text-neutral-500  pb-3 border-b border-neutral-600 mb-6 text-xs list-disc">Font</p>

                <div className="all-cols flex flex-col md:flex-row h-[300px] overflow-y-scroll justify-between">
                    <div className="all flex flex-col text-white ">
                        <Link to="/winners" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Winners</Link>
                        <Link to="/nominee" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Nominees</Link>
                        <Link to="/sotd" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Sites of day</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
                        <Link to="/sotm" className="pt-2 pb-2 pl-3  w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Site of Month</Link>
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

            {/* Color section With Search Bar */}
            <div className={props.isColorNavOpen ? "above h-[600px] md:h-auto overflow-y-scroll md:overflow-auto w-full bg-aw-color rounded-lg p-6 " : "hidden above  flex-row justify-between bg-aw-color rounded-lg p-4 "}>
                                
                <ul className="grid grid-cols-7">
                    <li className="px-4 py-6 bg-black"></li>
                    <li className="px-4 py-6 bg-neutral-700"></li>
                    <li className="px-4 py-6 bg-neutral-600"></li>
                    <li className="px-4 py-6 bg-neutral-500"></li>
                    <li className="px-4 py-6 bg-neutral-400"></li>
                    <li className="px-4 py-6 bg-neutral-300"></li>
                    <li className="px-4 py-6 bg-neutral-200"></li>
                    <li className="px-4 py-6 bg-neutral-100"></li>
                    <li className="px-4 py-6 bg-red-200"></li>
                    <li className="px-4 py-6 bg-red-300"></li>
                    <li className="px-4 py-6 bg-red-400"></li>
                    <li className="px-4 py-6 bg-red-500"></li>
                    <li className="px-4 py-6 bg-red-600"></li>
                    <li className="px-4 py-6 bg-red-700"></li>
                    <li className="px-4 py-6 bg-red-800"></li>
                    <li className="px-4 py-6 bg-red-900"></li>
                    <li className="px-4 py-6 bg-yellow-700"></li>
                    <li className="px-4 py-6 bg-yellow-600"></li>
                    <li className="px-4 py-6 bg-yellow-500"></li>
                    <li className="px-4 py-6 bg-yellow-400"></li>
                    <li className="px-4 py-6 bg-yellow-300"></li>
                </ul>

                
            </div>

            {/* Category withouT search bar */}
            <div className={props.isCatNavOpen ? "above h-[600px] md:h-auto overflow-y-scroll md:overflow-auto w-full bg-aw-color rounded-lg p-6 " : "hidden above  flex-row justify-between bg-aw-color rounded-lg p-4 "}>    
                
                <p className="text-neutral-500  pb-3 border-b border-neutral-600 mb-6 text-xs list-disc">Categories</p>

                <div className="all-cols flex flex-col md:flex-row justify-between">
                    <div className="all flex flex-col text-white ">
                        <Link to="/winners" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Winners</Link>
                        <Link to="/nominee" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Nominees</Link>
                    </div>

                    <div className="all flex flex-col text-white ">
                        <Link to="/winners" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Winners</Link>
                        <Link to="/nominee" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Nominees</Link>
                    </div>

                    <div className="all flex flex-col text-white ">
                        <Link to="/winners" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Winners</Link>
                        <Link to="/nominee" className="pt-2 pb-2 pl-3 w-fit mb-4 text-sm p-2 hover:bg-neutral-700 rounded-3xl hover:transition-all hover:duration-200 hover:border-lime-600">Nominees</Link>
                    </div>

                    
                    
                </div>

                
            </div>
            
        </>
    )
}