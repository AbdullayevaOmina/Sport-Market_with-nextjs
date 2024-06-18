"use client";
// components/Carousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { all_mages } from "@/assets/images";

// Install Swiper modules
SwiperCore.use([Navigation]);

import { CaruselCard } from "../card";

interface Props {
  text?: string;
  bg?: string;
}

const Carusel = ({ text, bg }: Props) => {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide style={{ borderRadius: 10 }}>
          <CaruselCard text={text} bg={bg} img={all_mages[0]} />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: 10 }}>
          <CaruselCard text={text} bg={bg} img={all_mages[1]} />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: 10 }}>
          <CaruselCard text={text} bg={bg} img={all_mages[2]} />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: 10 }}>
          <CaruselCard text={text} bg={bg} img={all_mages[3]} />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: 10 }}>
          <CaruselCard text={text} bg={bg} img={all_mages[4]} />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: 10 }}>
          <CaruselCard text={text} bg={bg} img={all_mages[5]} />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: 10 }}>
          <CaruselCard text={text} bg={bg} img={all_mages[0]} />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: 10 }}>
          <CaruselCard text={text} bg={bg} img={all_mages[1]} />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: 10 }}>
          <CaruselCard text={text} bg={bg} img={all_mages[2]} />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: 10 }}>
          <CaruselCard text={text} bg={bg} img={all_mages[3]} />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

Carusel.displayName = "Carusel";
export default Carusel;
