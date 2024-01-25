import React from "react";
import { Link } from "react-router-dom";


const Header = () =>{
    return(
        <div className="full-nav py-2 lg:flex justify-between">
            <div className="left-side lg:w-10/12 flex flex-row justify-between items-center">
                <Link to="/">
                    <span className="font-bold text-lg">W.</span>
                </Link>
                <div className="w-full h-full mx-2 relative grow">
                    <p className="absolute inset-y-0 top-3 left-4 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </p> 
                    <input className="w-full py-3 bg-gray-300 px-12 rounded-lg" type="text" placeholder="Search in Inspiration" />
                </div>
                <div className="hidden sm:flex pl-2 gap-x-3 w-2/12">
                    <a href="" className="font-semibold text-sm w-14">Log in</a>
                    <a href="" className="font-semibold text-sm w-14">Sign Up</a>
                </div>

                <a href="" className="font-semibold text-sm sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                </a>
            </div>

            <div className="right-side hidden lg:flex gap-2">
                <button className="bg-black text-white px-3 rounded-lg text-base">Be Pro</button>
                <button className="border px-3 border-neutral-950 rounded-lg text-base">Submit Website</button>
            </div>
        </div>
    )
}

export default Header;