import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../styles/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper flex justify-center"
      >
        <SwiperSlide className="flex justify-center" >
            <img className="h-full w-full max-h-[32rem] min-[1400px]:w-[80rem] min-[1400px]:ml-[8rem]   mt-10" src="./img1.jpg" alt="1" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
            <img className="h-full w-full max-h-[32rem] min-[1400px]:w-[80rem] min-[1400px]:ml-[8rem]  ml-8 mt-10" src="./img2.jpg" alt="2" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
