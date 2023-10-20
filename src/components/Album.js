import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
function Album() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>

      <div className="text-lg mb-[40px] border-b-2 border-[#888] inline-block ">Album</div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./../Images/1.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/2.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/3.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/4.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/5.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/6.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/7.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/8.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/9.jpg" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/10.jpg" alt="시훈" /></SwiperSlide>

      </Swiper>

    </>
  )
}

export default Album