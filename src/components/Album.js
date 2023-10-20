
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
function Album() {
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
        <SwiperSlide><img src="./../Images/1.png" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/2.png" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/3.png" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/4.png" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/5.png" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/6.png" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/7.png" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/8.png" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/9.png" alt="시훈" /></SwiperSlide>
        <SwiperSlide><img src="./../Images/10.png" alt="시훈" /></SwiperSlide>
      </Swiper>

    </>
  )
}

export default Album