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
            New Arrival
          </h1>
        </div>
      </div>

      <div className="min-h-screen grid justify-items-center p-5 gap-8">
        <catalog
          as
          div
          className="grid sm:flex justify-center gap-4 h-fit w-fit bg-customwhite shadow-lg shadow-customblue rounded-lg p-1 sm:p-2"
        >
          <div className="grid justify-items-center items-center prose bg-transparent">
            <h1 className="text-left font-poiret bg-transparent">ITEMS NAME</h1>
            <h1 className="text-sm text-justify font-thin bg-transparent">
              Adipisicing cupidatat aliquip deserunt nulla do excepteur.
              Incididunt cupidatat deserunt elit proident mollit occaecat aliqua
              aute aliqua reprehenderit laboris culpa consectetur. Fugiat
              eiusmod aute irure anim Lorem cupidatat minim est deserunt minim.
              Est in cupidatat eu reprehenderit laboris sint quis nisi nulla
              exercitation in. Irure labore dolore aute amet culpa anim. Ex
              incididunt velit commodo magna. Minim Lorem dolor elit veniam sit.
              Lorem quis velit deserunt commodo. Excepteur ad reprehenderit
              aliqua elit elit magna et mollit in irure Lorem adipisicing
              voluptate. Laboris quis culpa reprehenderit elit amet do minim ut
              ea consequat aute. In aliquip anim esse laborum cillum
              exercitation consectetur. Nostrud esse do anim dolore veniam aute
              ipsum voluptate mollit mollit qui cupidatat. Sunt nulla deserunt
              magna quis fugiat tempor esse quis minim non aute. Sint laboris
              dolore nostrud qui ullamco minim et esse velit. Amet nisi
              reprehenderit pariatur veniam enim sunt.
            </h1>
            <rating as div class="flex items-center">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                4.95
              </p>
              <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <a
                href="#"
                class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
              >
                73 reviews
              </a>
            </rating>
            <button as div className="flex gap-3 items-end pb-2 bg-transparent">
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                preview
              </button>
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                wishlist
              </button>
            </button>
          </div>
          <div>
            <img src={Models.cat2} alt="" className="w-96" />
          </div>
        </catalog>

        <catalog
          as
          div
          className="grid sm:flex justify-center gap-4 h-fit w-fit bg-customwhite shadow-lg shadow-customblue rounded-lg p-1 sm:p-2"
        >
          <div className="grid justify-items-center items-center prose bg-transparent">
            <h1 className="text-left font-poiret bg-transparent">ITEMS NAME</h1>
            <h1 className="text-sm text-justify font-thin bg-transparent">
              Adipisicing cupidatat aliquip deserunt nulla do excepteur.
              Incididunt cupidatat deserunt elit proident mollit occaecat aliqua
              aute aliqua reprehenderit laboris culpa consectetur. Fugiat
              eiusmod aute irure anim Lorem cupidatat minim est deserunt minim.
              Est in cupidatat eu reprehenderit laboris sint quis nisi nulla
              exercitation in. Irure labore dolore aute amet culpa anim. Ex
              incididunt velit commodo magna. Minim Lorem dolor elit veniam sit.
              Lorem quis velit deserunt commodo. Excepteur ad reprehenderit
              aliqua elit elit magna et mollit in irure Lorem adipisicing
              voluptate. Laboris quis culpa reprehenderit elit amet do minim ut
              ea consequat aute. In aliquip anim esse laborum cillum
              exercitation consectetur. Nostrud esse do anim dolore veniam aute
              ipsum voluptate mollit mollit qui cupidatat. Sunt nulla deserunt
              magna quis fugiat tempor esse quis minim non aute. Sint laboris
              dolore nostrud qui ullamco minim et esse velit. Amet nisi
              reprehenderit pariatur veniam enim sunt.
            </h1>

            <rating as div class="flex items-center">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                4.95
              </p>
              <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <a
                href="#"
                class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
              >
                73 reviews
              </a>
            </rating>

            <button as div className="flex gap-3 items-end pb-2 bg-transparent">
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                preview
              </button>
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                wishlist
              </button>
            </button>
          </div>
          <div>
            <img src={Models.cat1} alt="" className="w-96" />
          </div>
        </catalog>

        <catalog
          as
          div
          className="grid sm:flex justify-center gap-4 h-fit w-fit bg-customwhite shadow-lg shadow-customblue rounded-lg p-1 sm:p-2"
        >
          <div className="grid justify-items-center items-center prose bg-transparent">
            <h1 className="text-left font-poiret bg-transparent">ITEMS NAME</h1>
            <h1 className="text-sm text-justify font-thin bg-transparent">
              Adipisicing cupidatat aliquip deserunt nulla do excepteur.
              Incididunt cupidatat deserunt elit proident mollit occaecat aliqua
              aute aliqua reprehenderit laboris culpa consectetur. Fugiat
              eiusmod aute irure anim Lorem cupidatat minim est deserunt minim.
              Est in cupidatat eu reprehenderit laboris sint quis nisi nulla
              exercitation in. Irure labore dolore aute amet culpa anim. Ex
              incididunt velit commodo magna. Minim Lorem dolor elit veniam sit.
              Lorem quis velit deserunt commodo. Excepteur ad reprehenderit
              aliqua elit elit magna et mollit in irure Lorem adipisicing
              voluptate. Laboris quis culpa reprehenderit elit amet do minim ut
              ea consequat aute. In aliquip anim esse laborum cillum
              exercitation consectetur. Nostrud esse do anim dolore veniam aute
              ipsum voluptate mollit mollit qui cupidatat. Sunt nulla deserunt
              magna quis fugiat tempor esse quis minim non aute. Sint laboris
              dolore nostrud qui ullamco minim et esse velit. Amet nisi
              reprehenderit pariatur veniam enim sunt.
            </h1>
            <rating as div class="flex items-center">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                4.95
              </p>
              <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <a
                href="#"
                class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
              >
                73 reviews
              </a>
            </rating>
            <button as div className="flex gap-3 items-end pb-2 bg-transparent">
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                preview
              </button>
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                wishlist
              </button>
            </button>
          </div>
          <div>
            <img src={Models.cat3} alt="" className="w-96" />
          </div>
        </catalog>
      </div>
    </>
  );
};

export default Catalogue;
