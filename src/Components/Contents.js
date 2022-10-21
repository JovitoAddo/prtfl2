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
