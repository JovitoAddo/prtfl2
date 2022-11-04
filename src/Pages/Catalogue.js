import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Brand from "../Assets/Content/brandlogo";
import Models from "../Assets/Content";

import "swiper/css";

const Catalogue = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid items-end w-full h-36 border-2 border-customblack bg-gradient-to-r from-customblue to-customred">
          <h1 className="bg-transparent text-customwhite text-5xl font-staat text-center">
            New Arrival Today
          </h1>
        </div>
      </div>

      <div className="min-h-screen grid justify-center ">
        <div className="grid sm:flex p-2 gap-4">
          <div>
            <img src={Models.cat2} alt="" className="h-96" />
          </div>
          <div>
            <img src={Models.cat2} alt="" className="h-96" />
          </div>
        </div>
        <div  className="grid sm:flex p-2 gap-4">
          <div>
            <img src={Models.cat1} alt="" className="h-96" />
          </div>
          <div>
            <img src={Models.cat3} alt="" className="h-96" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogue;
