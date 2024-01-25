import React from "react";
import { Link } from "react-router-dom";


export default function PageNavMenu(props){
    return(
        <div className={props.isPageNavOpen ? "above h-[600px] md:h-auto overflow-y-scroll w-full bg-aw-color rounded-lg p-6 " : "hidden above  flex-row justify-between bg-aw-color rounded-lg p-4 "}>
                            
            <div className="w-full h-full mb-4 relative grow">
                <p className="absolute inset-y-0 top-3 right-4 text-neutral-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </p> 
                <input className="w-full py-3 bg-neutral-700 px-4 pr-10 rounded-lg" type="text" placeholder="Search in Inspiration" />
            </div>
            
            
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
    )
}