import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Album() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
<>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
    
        navigation={true}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img  src="./../Images/1.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img  src="./../Images/1.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img  src="./../Images/1.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img  src="./../Images/1.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img  src="./../Images/1.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img  src="./../Images/1.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img  src="./../Images/1.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img  src="./../Images/1.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img  src="./../Images/1.jpg" alt="시훈" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 0 0 " ref={progressCircle}>
            {/* <circle cx="24" cy="24" r="20"></circle> */}
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

</>
  )
}

export default Album