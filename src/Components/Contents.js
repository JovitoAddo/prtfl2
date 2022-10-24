import React from "react";
import { motion } from "framer-motion";
import logo from "../Assets/logo.png";
import video from "../Assets/vids.mp4";
import bp1 from "../Assets/Content/blackpics1.jpg";
import bp2 from "../Assets/Content/blackpics2.jpg";
import bp3 from "../Assets/Content/blackpics3.jpg";
import iw1 from "../Assets/Content/windopics1.jpg";
import iw2 from "../Assets/Content/windopics2.jpg";
import iw3 from "../Assets/Content/windopics3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-easy-marquee";
import brand from "../Assets/Content/brandlogo/puma-logo.svg"

import Brand from "../Assets/Content/brandlogo";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Contents = () => {
  return (
    <container as="div" className="min-h-screen ">
      {/* HEADER */}

      <div className="min-h-screen flex justify-center pb-2">
        <video
          className="min-w-full object-cover min-h-screen"
          src={video}
          autoPlay
          muted
          loop
        />
        <div className="absolute top-56  object-cover bg-transparent grid justify-items-center">
          <img src={logo} className=" h-80 w-80 " />
          <h1 className="prose text-center font-staat text-customwhite pt-2 text-4xl bg-transparent mb-2">
            Customize yourself according to what you wants
          </h1>
        </div>
      </div>

      {/* BODY */}
      <Marquee
      duration={10000}
        className="flex min-w-full h-20 mx-auto justify-center prose border-b-8 border-t-8 mb-2 border-customred"
      >
        {Brand && Brand.map((item)=>
        <div key={item.id}>
          <img src={item.image}/>
        </div>)}
        <img className="w-20" src={brand}/>
      </Marquee>

      <div className="grid sm:flex justify-items-center justify-around bg-gradient-to-r from-customblack to-customblue p-2">
        <div className=" w-60 sm:w-80 rounded-lg">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            className="mySwiper rounded-lg bg-transparent"
          >
            <SwiperSlide>
              <img src={bp1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bp2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bp3} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="prose text-center grid items-center bg-transparent text-customwhite m-2">
          <div className="bg-transparent box-decoration-slice ">
            Est reprehenderit Lorem minim pariatur commodo. Pariatur voluptate
            id sint irure ex ipsum non tempor mollit laboris incididunt. Elit
            tempor laboris sit ipsum enim tempor commodo consequat adipisicing
            elit velit. Sunt id dolor minim irure excepteur esse Lorem deserunt
            ea. Ullamco proident exercitation est minim sit officia eu tempor.
            Aliquip fugiat veniam ex aliquip anim ut commodo deserunt officia
            sit cillum est. Laborum adipisicing anim mollit culpa quis commodo
            do aute irure deserunt dolor officia duis ullamco. Eu cillum labore
            ipsum voluptate eiusmod cupidatat et velit velit est sit laborum.
          </div>
        </div>
      </div>

      <div className="grid sm:flex justify-items-center justify-around bg-customblue p-2">
        <div className="prose text-center grid items-center bg-transparent text-customwhite">
          <div className="bg-transparent">
            Est reprehenderit Lorem minim pariatur commodo. Pariatur voluptate
            id sint irure ex ipsum non tempor mollit laboris incididunt. Elit
            tempor laboris sit ipsum enim tempor commodo consequat adipisicing
            elit velit.
          </div>
        </div>
        <div className=" w-60 sm:w-80 rounded-lg">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            className="mySwiper  rounded-lg"
          >
            <SwiperSlide>
              <img src={iw1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={iw2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={iw3} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </container>
  );
};

export default Contents;
