import React from "react";


const Header = () =>{
    return(
        <div className="full-nav py-2 lg:flex justify-between">
            <div className="left-side lg:w-9/12 flex flex-row justify-between items-center">
                <span className="font-bold text-lg">W.</span>
                <div className="w-full h-full mx-2 relative grow">
                    <p className="absolute inset-y-0 top-3 left-4">se</p> 
                    <input className="w-full py-3 bg-gray-300 px-12 rounded-lg" type="text" placeholder="Search in Inspiration" />
                </div>
                <div className="hidden sm:flex pl-2 gap-x-3 w-4/12">
                    <a href="" className="font-semibold text-sm">Log in</a>
                    <a href="" className="font-semibold text-sm">Sign Up</a>
                </div>

                <a href="" className="font-semibold text-sm sm:hidden">Login</a>
            </div>

            <div className="right-side hidden lg:flex gap-2">
                <button className="bg-black text-white px-3 rounded-lg text-base">Be Pro</button>
                <button className="border px-3 border-neutral-950 rounded-lg text-base">Submit Website</button>
            </div>
        </div>
    )
}

export default Header;