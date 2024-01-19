import React from "react";


export default function TableDet(){
    return(
        <div className="mt-8 md:mt-20 w-full">
            <table className="w-full table-auto sm:table-fixed">
                <tr className="text-left text-sm text-aw-color border-b border-dashed border-aw-color ">
                    <th className="p-7">Name</th>
                    <th className="p-7 hidden md:table-cell">Profile</th>
                    <th className="p-7 hidden md:table-cell">Awards</th>
                    <th className="p-7 hidden md:table-cell">Ctegories</th>
                </tr>

                <tr  className="text-left text-lg hover:bg-aw-background border-y border-dashed border-aw-color">
                    <td className="py-9 px-7">
                        <div className="user flex gap-x-3">
                            <img className="w-8 h-8 rounded-[50px]" src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/2224726/659d88f683ae8636087718.png" alt="" />
                            <a href="" className="border-b-2 border-neutral-700 font-bold">bufugu.com <small className="text-[8px]">INT</small></a>
                        </div>
                    </td>
                    <td className="py-9 px-7 hidden md:table-cell">Studio</td>
                    <td className="py-9 px-7 hidden md:table-cell">24</td>
                    <td className="py-9 px-7 hidden md:table-cell">Web Design , Web Development , UX/</td>
                    <td className="py-9 px-7 w-full flex justify-end"><button className="px-5 text-sm border border-aw-color h-10 rounded-lg hover:bg-black hover:text-white">View</button></td>
                </tr>

                <tr  className="text-left text-lg hover:bg-aw-background border-y border-dashed border-aw-color">
                    <td className="py-9 px-7">
                        <div className="user flex gap-x-3">
                            <img className="w-8 h-8 rounded-[50px]" src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/2224726/659d88f683ae8636087718.png" alt="" />
                            <a href="" className="border-b-2 border-neutral-700 font-bold">bufugu.com <small className="text-[8px]">INT</small></a>
                        </div>
                    </td>
                    <td className="py-9 px-7 hidden md:table-cell">Studio</td>
                    <td className="py-9 px-7 hidden md:table-cell">24</td>
                    <td className="py-9 px-7 hidden md:table-cell">Web Design , Web Development , UX/</td>
                    <td className="py-9 px-7 w-full flex justify-end"><button className="px-5 text-sm border border-aw-color h-10 rounded-lg hover:bg-black hover:text-white">View</button></td>
                </tr>

                <tr  className="text-left text-lg hover:bg-aw-background border-y border-dashed border-aw-color">
                    <td className="py-9 px-7">
                        <div className="user flex gap-x-3">
                            <img className="w-8 h-8 rounded-[50px]" src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/2224726/659d88f683ae8636087718.png" alt="" />
                            <a href="" className="border-b-2 border-neutral-700 font-bold">bufugu.com <small className="text-[8px]">INT</small></a>
                        </div>
                    </td>
                    <td className="py-9 px-7 hidden md:table-cell">Studio</td>
                    <td className="py-9 px-7 hidden md:table-cell">24</td>
                    <td className="py-9 px-7 hidden md:table-cell">Web Design , Web Development , UX/</td>
                    <td className="py-9 px-7 w-full flex justify-end"><button className="px-5 text-sm border border-aw-color h-10 rounded-lg hover:bg-black hover:text-white">View</button></td>
                </tr>

                <tr  className="text-left text-lg hover:bg-aw-background border-y border-dashed border-aw-color">
                    <td className="py-9 px-7">
                        <div className="user flex gap-x-3">
                            <img className="w-8 h-8 rounded-[50px]" src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/2224726/659d88f683ae8636087718.png" alt="" />
                            <a href="" className="border-b-2 border-neutral-700 font-bold">bufugu.com <small className="text-[8px]">INT</small></a>
                        </div>
                    </td>
                    <td className="py-9 px-7 hidden md:table-cell">Studio</td>
                    <td className="py-9 px-7 hidden md:table-cell">24</td>
                    <td className="py-9 px-7 hidden md:table-cell">Web Design , Web Development , UX/</td>
                    <td className="py-9 px-7 w-full flex justify-end"><button className="px-5 text-sm border border-aw-color h-10 rounded-lg hover:bg-black hover:text-white">View</button></td>
                </tr>

                

                
                

            </table> 
        </div>
    )
}