import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Brand from "../Assets/Content/brandlogo";
import Models from "../Assets/Content";

import "swiper/css";

const Catalogue = () => {
  return (
    <>
      <div className="flex justify-center pt-20">
        <div className="grid items-center w-1/3 h-36 border-2 border-customblack rounded-md bg-gradient-to-r from-customblue to-customred">
          <h1 className="bg-transparent text-customwhite text-5xl font-staat text-center">New Arrival Today</h1>
        </div>
      </div>

      <div className="min-h-screen grid justify-center items-center">
        something
      </div>
    </>
  );
};

export default Catalogue;
