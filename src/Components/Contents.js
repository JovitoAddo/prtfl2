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
          <h1 className="prose text-center font-staat text-customwhite pt-2 text-4xl bg-transparent">
            Customize yourself according to what you wants
          </h1>
        </div>
      </div>

      {/* BODY */}
      <div className="flex mx-auto justify-center prose border-b-8 min-w-full border-t-8 border-customred">
        <motion.h1 className=" text-center text-5xl transition ">
          SOMETHING SOMETHING SALES?????
        </motion.h1>
      </div>

      <div id="default-carousel" class="relative" data-carousel="static">
        {/* <!-- Carousel wrapper --> */}
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          <div
            class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
            data-carousel-item=""
          >
            <span class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
              First Slide
            </span>
            <img
              src="/docs/images/carousel/carousel-1.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div
            class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
            data-carousel-item=""
          >
            <img
              src="/docs/images/carousel/carousel-2.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div
            class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
            data-carousel-item=""
          >
            <img
              src="/docs/images/carousel/carousel-3.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="grid pt-5">
        <div className="flex justify-evenly">
          <div className="grid justify-items-center mx-auto">
            <img src={bp1} className="w-80" />
            <h1>1</h1>
          </div>
          <div className="grid justify-items-center mx-auto">
            <img src={bp2} className="w-80" />
            <h1>2</h1>
          </div>
          <div className="grid justify-items-center mx-auto">
            <img src={bp3} className="w-80" />
            <h1>3</h1>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="grid justify-items-center mx-auto">
            <img src={iw1} className="w-80" />
            <h1>1</h1>
          </div>
          <div className="grid justify-items-center mx-auto">
            <img src={iw2} className="w-80" />
            <h1>2</h1>
          </div>
          <div className="grid justify-items-center mx-auto">
            <img src={iw3} className="w-80" />
            <h1>3</h1>
          </div>
        </div>
      </div>
    </container>
  );
};

export default Contents;
