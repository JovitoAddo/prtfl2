import React from "react";
import { motion } from "framer-motion";
import logo from "../Assets/logo.png";
import video from "../Assets/vids.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
// Pictures Import
import Models from "../Assets/Content/index";
import Brand from "../Assets/Content/brandlogo";
// Swiper Import
import "swiper/css";
import { Autoplay } from "swiper";

const Contents = () => {
  return (
    <container as="div" className="min-h-screen ">
      {/* HEADER */}

      <div className="bg-customblack min-h-screen flex justify-center pb-2">
        <div className="bg-customblack min-w-full opacity-40"><video
          className="min-w-full object-cover min-h-screen"
          src={video}
          autoPlay
          muted
          loop
        /></div>
        
        <div className="absolute top-44  object-cover bg-transparent grid justify-items-center">
          <img src={logo} className=" h-80 w-80 " alt="" />
          <h1 className="prose text-center font-staat text-customwhite pt-2 text-4xl bg-transparent">
            Customize yourself according to what you wants
          </h1>
        </div>
      </div>

      {/* BODY */}
      <Marquee
        delay={1}
        className="flex min-w-full h-40 justify-center prose border-b-8 border-t-8 mb-2 bg-white border-customred"
      >
        <img className="w-36 bg-white p-2" src={Brand.logoAdidas4} alt="" />
        <img className="w-36 bg-white p-2" src={Brand.logoAdidas} alt="" />
        <img className="w-36 bg-white p-2" src={Brand.logoHugoBoss} alt="" />
        <img className="w-36 bg-white p-2" src={Brand.logoChanel} alt="" />
        <img className="w-36 bg-white p-2" src={Brand.logoDG} alt="" />
        <img className="w-36 bg-white p-2" src={Brand.logoFila} alt="" />
        <img className="w-36 bg-white p-2" src={Brand.logoJordan} alt="" />
        <img className="w-36 bg-white p-2" src={Brand.logoNike} alt="" />
        <img className="w-36 bg-white p-2" src={Brand.logoLacoste} alt="" />
        <img className="w-36 bg-white p-2" src={Brand.logoKFC} alt="" />
        <img className="w-36 bg-white p-2" src={Brand.logoPrada} alt="" />
        <img className="w-36 bg-white p-2" src={Brand.logoPuma} alt="" />
        <img className="w-36 bg-white p-2" src={Brand.logoUA} alt="" />
        <img className="w-36 bg-white p-2" src={Brand.logoVersace} alt="" />
      </Marquee>

      {/* slideshow 1 */}
      <div className="grid sm:flex justify-items-center justify-around bg-customwhite p-2 ">
        <div className="grid sm:flex justify-items-center justify-around p-2 ">
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
                <img src={Models.bp1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Models.bp2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Models.bp3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="prose text-center grid justify-items-center bg-transparent text-customblue m-2 p-4">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-4xl text-customred grid items-end "
            >
              SOMETHING | SOMETHING
            </motion.h1>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="bg-transparent box-decoration-slice"
            >
              Est reprehenderit Lorem minim pariatur commodo. Pariatur voluptate
              id sint irure ex ipsum non tempor mollit laboris incididunt. Elit
              tempor laboris sit ipsum enim tempor commodo consequat adipisicing
              elit velit. Sunt id dolor minim irure excepteur esse Lorem
              deserunt ea. Ullamco proident exercitation est minim sit officia
              eu tempor. Aliquip fugiat veniam ex aliquip anim ut commodo
              deserunt officia sit cillum est. Laborum adipisicing anim mollit
              culpa quis commodo do aute irure deserunt dolor officia duis
              ullamco. Eu cillum labore ipsum voluptate eiusmod cupidatat et
              velit velit est sit laborum.
            </motion.div>
          </div>
        </div>
      </div>

      {/* slideshow2 */}
      <div className="grid sm:flex justify-items-center bg-customwhite justify-around p-2">
        <div className="border-t-2 border-customblue grid sm:flex justify-items-center justify-around p-2">
          <div className="prose text-center grid justify-items-center bg-transparent text-customblue order-last sm:order-first p-4">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-4xl text-customred grid items-end"
            >
              SOMETHING | SOMETHING
            </motion.h1>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="bg-transparent "
            >
              Est reprehenderit Lorem minim pariatur commodo. Pariatur voluptate
              id sint irure ex ipsum non tempor mollit laboris incididunt. Elit
              tempor laboris sit ipsum enim tempor commodo consequat adipisicing
              elit velit. Fugiat dolor est cupidatat laborum duis sit
              consectetur incididunt Lorem laboris dolore ipsum irure mollit.
              Culpa exercitation qui eu commodo dolore excepteur consequat
              dolore do laboris. Voluptate occaecat ea minim minim enim qui
              voluptate nisi velit incididunt cupidatat ex. Deserunt ut dolore
              reprehenderit incididunt. Nulla est anim pariatur do ullamco do
              nisi sit do minim.
            </motion.div>
          </div>
          <div className=" w-60 sm:w-80 rounded-lg border-t-2 order-first sm:order-last">
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
                <img src={Models.iw1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Models.iw2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Models.iw3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Catalogue */}
      <div className="min-w-full min-h-screen bg-customblack text-customwhite prose text-center pb-14">
        <h1 className="bg-customblack text-customwhite cursor-default">
          Catalogue
        </h1>
        <div className="bg-transparent sm:grid sm:grid-rows-3 sm:grid-flow-col grid justify-evenly mx-5 gap-10">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative bg-transparent max-h-96 "
          >
            <img
              src={Models.bp1}
              className="max-h-96 rounded-md opacity-70 hover:opacity-100 border-4 hover:border-customwhite border-customred"
              alt=""
            />
            <div className=" bg-transparent absolute top-10 w-full text-customwhite font-staat cursor-default text-3xl h-12">
              items 1
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative bg-transparent max-h-96 "
          >
            <img
              src={Models.bp2}
              className="max-h-96 rounded-md opacity-70 hover:opacity-100 border-4 hover:border-customwhite border-customred"
              alt=""
            />
            <div className=" bg-transparent absolute top-10 w-full text-customwhite font-staat cursor-default text-3xl h-12">
              items 2
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative bg-transparent max-h-96 "
          >
            <img
              src={Models.bp3}
              className="max-h-96 rounded-md opacity-70 hover:opacity-100 border-4 hover:border-customwhite border-customred"
              alt=""
            />
            <div className=" bg-transparent absolute top-10 w-full text-customwhite font-staat cursor-default text-3xl h-12">
              items 3
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative bg-transparent max-h-96"
          >
            <img
              src={Models.iw1}
              className="max-h-96 rounded-md opacity-70 hover:opacity-100 border-4 hover:border-customwhite border-customred"
              alt=""
            />
            <div className=" bg-transparent absolute top-10 w-full text-customwhite font-staat cursor-default text-3xl h-12">
              items 4
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative bg-transparent max-h-96"
          >
            <img
              src={Models.iw2}
              className="max-h-96 rounded-md opacity-70 hover:opacity-100 border-4 hover:border-customwhite border-customred"
              alt=""
            />
            <div className=" bg-transparent absolute top-10 w-full text-customwhite font-staat cursor-default text-3xl h-12">
              items 5
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative bg-transparent max-h-96 "
          >
            <img
              src={Models.iw3}
              className="max-h-96 rounded-md opacity-70 hover:opacity-100 border-4 hover:border-customwhite border-customred"
              alt=""
            />
            <div className=" bg-transparent absolute top-10 w-full text-customwhite font-staat cursor-default text-3xl h-12">
              items 6
            </div>
          </motion.div>
        </div>
      </div>

      {/* Placeholder */}
      <div className="min-h-screen bg-customblack">
        <div className="min-h-screen bg-customred opacity-30 prose text-center min-w-full text-customwhite">
          <div className="bg-transparent text-7xl font-staat p-8">Who we are?</div>
          <div className="bg-transparent ">
            Veniam eiusmod excepteur aliqua nisi commodo aute ex deserunt
            cupidatat laboris eiusmod adipisicing laborum. Labore sit aliquip
            non proident. Laborum et ex excepteur aute nulla laboris elit
            voluptate in. Ullamco deserunt pariatur laborum eiusmod amet eiusmod
            non ex sunt sint ea. Fugiat nulla aliquip proident minim ipsum minim
            aliqua irure velit excepteur anim. Enim nisi ipsum sunt ullamco.
            Ipsum ex duis minim qui anim incididunt qui ullamco anim occaecat
            ut. Labore eiusmod velit laborum excepteur enim amet duis sint culpa
            ipsum nisi. Consectetur sunt pariatur eiusmod dolore nisi deserunt
            tempor qui et laborum sunt esse. Magna ut excepteur Lorem non ipsum.
            Cillum ullamco dolore incididunt non minim tempor esse. Excepteur
            ipsum incididunt nostrud aliqua minim fugiat mollit tempor minim
            duis id sunt. Irure ipsum id fugiat ipsum reprehenderit ullamco
            ullamco duis esse. Sunt in non nisi ipsum pariatur. Enim minim
            cupidatat esse labore commodo do eiusmod laborum irure id. Cillum
            excepteur duis voluptate dolor in magna. Minim non aute anim in quis
            consectetur. Eu ut sint labore magna mollit labore laboris sunt. Eu
            esse ea sint nostrud esse dolore sint aliquip quis incididunt.
            Cupidatat do nisi id minim nisi mollit deserunt nisi. Fugiat veniam
            fugiat proident adipisicing. Est esse Lorem sint ipsum ex irure
            adipisicing cillum. Sunt Lorem elit eiusmod id aute tempor excepteur
            sint dolore velit consequat tempor. Incididunt ex est esse fugiat
            amet officia laboris eiusmod cillum mollit occaecat.
          </div>
        </div>
      </div>
    </container>
  );
};

export default Contents;
