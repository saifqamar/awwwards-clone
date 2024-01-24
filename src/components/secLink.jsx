import React from "react";


const SecLink = () => {
    return(
        <div className="text-center pt-8 md:pt-12 xl:pt-16 2xl:pt-20  pb-12 sm:pb-16 md:pb-24 lg:pb-32 xl:pb-40 2xl:pb-48 flex flex-col sm:flex-row items-center justify-center gap-x-4">
            <h1 className="text-lg">Check out all submitted websites</h1>
            <a href=""><span className="font-bold text-lg border-b-2 border-neutral-600">--View Nominees</span></a>
        </div>
    )
}

export default SecLink;