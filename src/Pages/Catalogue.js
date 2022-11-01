import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Brand from "../Assets/Content/brandlogo";
import Models from "../Assets/Content";

import "swiper/css";

const Catalogue = () => {
  return (
    <div className="min-h-screen">
      <div className="min-w-full pt-40">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper rounded-lg bg-transparent h-96"
        >
          <SwiperSlide className="static">
            <img src={Models.np1} alt="" className="w-fit bg-transparent" />
            <h1 className="absolute top-0 right-0 text-6xl font-poiret text-customred bg-transparent">
              NEW STUFF
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Models.iw1} alt="" className="w-full bg-transparent" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Models.iw2} alt="" className="w-full bg-transparent" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Models.iw3} alt="" className="w-full bg-transparent" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Models.bp2} alt="" className="w-full bg-transparent" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Catalogue;
