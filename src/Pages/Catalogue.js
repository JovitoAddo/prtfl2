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

      <div className="min-h-screen grid justify-center p-5 gap-8">
        <catalog
          as
          div
          className="grid sm:flex justify-center gap-4 h-fit w-fit bg-customwhite shadow-lg shadow-customblue rounded-lg p-1 sm:p-2"
        >
          <div className="grid prose bg-transparent">
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
            <button as div className="flex gap-3 items-end pb-2 bg-transparent">
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                preview
              </button>
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                wishlist
              </button>
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                something
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
          <div className="grid prose bg-transparent">
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
            <button as div className="flex gap-3 items-end pb-2 bg-transparent">
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                preview
              </button>
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                wishlist
              </button>
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                something
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
          <div className="grid prose bg-transparent">
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
            <button as div className="flex gap-3 items-end pb-2 bg-transparent">
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                preview
              </button>
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                wishlist
              </button>
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                something
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
