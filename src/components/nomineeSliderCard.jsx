import React from "react";


 const NomineeCard= () =>{
    var prevBtn = document.getElementsByClassName('swiper-button-prev');
    prevBtn.innerHTML += 'Extra stuff';
    // console.log(prveBtn);
    return(
        <div>
            <img className="rounded-lg" src="https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/01/659ef087a41bc827547067.png" alt="" />
            <div className="flex items-center gap-x-2 pt-6">
                <p className="text-base font-bold">Nike x The Bauhaus</p>
                <small>by</small>
                <div className="user flex gap-x-3">
                    <img className="w-8 h-8 rounded-[50px]" src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/2224726/659d88f683ae8636087718.png" alt="" />
                    <a href="" className="border-b-2 border-neutral-700 text-base font-bold">bufugu.com</a>
                </div>
            </div>
        </div>
    )
}



export default NomineeCard;