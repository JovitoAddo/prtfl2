import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Brand from "../Assets/Content/brandlogo";

import "swiper/css";
import "swiper/css/pagination";

const Catalogue = () => {
  return (
    <div className="min-h-screen">
      <div className="min-w-full">
        <Swiper pagination={true} modules={[Pagination]} loop={true} className="mySwiper w-96">
          <SwiperSlide>
            <img src={Brand.logoChanel} alt="" className="w-full bg-transparent" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Brand.logoKFC} alt="" className="w-full bg-transparent" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Brand.logoNike} alt="" className="w-full bg-transparent" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Brand.logoAdidas} alt="" className="w-full bg-transparent" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Brand.logoJordan} alt="" className="w-full bg-transparent" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Catalogue;
