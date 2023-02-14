import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Brand from "../Assets/Content/brandlogo";
import Models from "../Assets/Content";

import "swiper/css";
import axios from "axios";
import Spinners from "../Components/Spinners";

const Catalogue = () => {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    setProduct(data)
  };

  useEffect(() => {
    getData()
    
  }, [])

  

  return (
    <>
      <div className="flex justify-center">
        <div className="grid items-end w-full h-36 border-2 border-customblack bg-gradient-to-r from-customblue to-customred">
          <h1 className="bg-transparent text-customwhite text-5xl font-staat text-center cursor-default">
          Men's Clothing
          </h1>
        </div>
      </div>

      {product.length > 0 ? 
      <div className="min-h-screen grid justify-items-center p-2 gap-8">
        {product.filter((produk)=>produk.category == "men's clothing").map((produk, index)=>(
          <div key={index}>
            <catalog
          as
          div
          className="grid sm:flex justify-center gap-4 h-fit w-fit bg-customwhite shadow-lg shadow-customblue rounded-lg p-1 sm:p-2"
        >
          <div className="grid justify-items-center items-center prose bg-transparent">
            <h1 className="text-center font-poiret bg-transparent cursor-default">{produk.title}</h1>
            <h1 className="text-sm text-justify font-thin bg-transparent">
              {produk.description}
            </h1>

            <price as div className="">
              {"$" + produk.price}
            </price>

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
                {produk.rating.rate}
              </p>
              <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <p
                className="text-sm font-medium text-gray-900 dark:text-white"
              >
                {produk.rating.count + " Rating"}
              </p>
            </rating>
            <button as div className="flex gap-3 items-end pb-2 bg-transparent">
              <Link to={`/catalogue/${produk.id}`} className="bg-transparent">
                <button className="border-2 border-customblue rounded-md px-6 bg-transparent hover:scale-125">
                  preview
                </button>
              </Link>
              <button className="border-2 border-customblue rounded-md px-6 bg-transparent">
                wishlist
              </button>
            </button>
          </div>
          <div className='flex justify-center'>
            <img src={produk.image} alt="" className="w-80 border-2 border-customblack border-opacity-10" />
          </div>
        </catalog>
          </div>
        ))}
        </div>
        :  
      <Spinners/>} 

      
    </>
  );
};

export default Catalogue;
