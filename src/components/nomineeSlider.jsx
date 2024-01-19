import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import NomineeCard from './nomineeSliderCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

// import './styles.css';

// import required modules
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function NomineeSlider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={
         {
          320:{
            slidesPerView:1,
            spaceBetween:10
          },
          640: {
            slidesPerView: 2,
            spaceBetween:15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          }

         }
        }
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        
        className="mySwiper"
      > 
        <SwiperSlide>
            <NomineeCard />
        </SwiperSlide>

        <SwiperSlide>
            <NomineeCard />
        </SwiperSlide>

        <SwiperSlide>
            <NomineeCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
