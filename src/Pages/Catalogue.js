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

      <div className="min-h-screen flex">
        <div className="grid p-2">
          <div className="h-96 prose text-center mx-auto grid items-center">
            Labore deserunt magna velit consectetur tempor in cupidatat
            excepteur. Minim eu aliqua cupidatat nostrud cupidatat sit. Nisi
            labore qui nostrud veniam Lorem ullamco magna pariatur officia.
            Culpa elit reprehenderit minim commodo tempor magna id ipsum
            excepteur irure duis irure adipisicing. Incididunt aute cupidatat
            sint laboris sint dolor est nisi fugiat occaecat enim elit laborum.
            Sunt eu excepteur cillum fugiat sint. Nisi incididunt esse proident
            voluptate irure Lorem adipisicing ipsum Lorem consequat esse do
            tempor.
          </div>
          <div>
            <img src={Models.cat2} alt=''/>
          </div>
        </div>
        <div>
          <img src={Models.np1} alt="" className="h-96" />
        </div>
      </div>
    </>
  );
};

export default Catalogue;
