import React, { useEffect, useState } from "react";
import Models from "../Assets/Content";
import StarRating from "../Components/StarRating";

import axios from "axios";
import { useParams } from "react-router-dom";
// import RecommendationProduct from "../Components/recommendationProduct";
import Recommend from "../Components/Recommend";
import Spinners from "../Components/Spinners";


const ItemPage = () => {
  const [product, setProduct] = useState([]);

  let { id } = useParams();

  const getData = async () => {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/" + `${id}`
    );

    setProduct(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen">
      <header
        as
        div
        className="grid items-end h-36 border-2 border-customblack bg-gradient-to-r from-customblue to-customred"
      >
        <h1 className="bg-transparent text-customwhite text-5xl font-staat text-center">
          {product.category}
        </h1>
      </header>


  {/* {product.length == 0 ?  */}
      <body as div className="grid pt-5 border-2 border-customblue p-4 m-4">
        <div className="grid sm:flex justify-around gap-3 p-4 border-b-2 border-customred">
          <img
            src={product.image}
            alt=""
            className="w-96 h-fit border border-customblack"
          />
          <div className="grid justify-items-center">

          <h1 className="bg-transparent text-customblack text-5xl font-poiret font-bold text-center">
          {product.title}
        </h1>

            <p className="text-center prose p-2 m-5 font-thin text-4xl">
              {product.description}
            </p>

            <div className='p-5'>
              <h1 className="font-merriwheater text-5xl text-customblue">$ {product.price}</h1>
            </div>

            <div className="flex items-end gap-10">
              <button className="border-2 border-customblack underline hover:no-underline hover:text-customred p-2 hover:scale-125 text-2xl">Put in cart</button>

              <button className="border-2 border-customblack underline hover:no-underline hover:text-customred p-2 hover:scale-125  text-2xl">Buy Now</button>
            </div>
          </div>
        </div>

        <comments as div className="">
          <Recommend/>
        </comments>
      </body> 
      {/* :<Spinners/>} */}
    </div>
  );
};

export default ItemPage;
