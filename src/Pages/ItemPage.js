import React, { useEffect, useState } from "react";
import Models from "../Assets/Content";
import StarRating from "../Components/StarRating";

import axios from "axios";
import { useParams } from "react-router-dom";

const ItemPage = () => {

  const [product, setProduct] = useState([]);

  let { id } = useParams();

  const getData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products"`${id}`);

    setProduct(data)
  };

  useEffect(() => {
    getData()
    console.log(getData)
  }, [])


  return (
    <div className="min-h-screen">
      <header
        as
        div
        className="grid items-end h-36 border-2 border-customblack bg-gradient-to-r from-customblue to-customred"
      >
        <h1 className="bg-transparent text-customwhite text-5xl font-staat text-center">
          {product.name}
        </h1>
      </header>

      <body as div className="grid pt-5 border-2 border-customblue p-4 m-4">
        <div className="grid sm:flex justify-around gap-3 p-4 border-b-2 border-customred">
          <img
            src={Models.np1}
            alt=""
            className="w-96 h-fit border border-customblack"
          />
          <div className="grid justify-items-center">
           
            <p className="text-justify p-2">
              Laboris et nulla aute sunt deserunt. Minim mollit sit ex voluptate
              officia reprehenderit. Minim minim aliqua cillum Lorem amet.
              Dolore nostrud laboris sunt nostrud dolor incididunt quis
              voluptate esse culpa ullamco anim sit. Ipsum officia eu pariatur
              dolor laboris ex dolor cillum magna. Cillum nisi eu dolore
              consectetur qui. Ea laborum in id exercitation reprehenderit.
              Velit commodo minim quis magna voluptate voluptate excepteur
              incididunt nulla officia. Aliqua occaecat officia aliquip nulla
              ullamco ullamco sit et ipsum. Laborum aliqua deserunt adipisicing
              nisi occaecat est et ex cupidatat voluptate exercitation
              incididunt.Incididunt velit anim magna amet Lorem magna. Voluptate
              veniam irure ea est anim. Consectetur dolore occaecat ipsum
              officia minim. Labore do ipsum et aliqua labore fugiat nisi velit
              consectetur ut ad exercitation. Sunt Lorem sunt eiusmod ad sit
              laborum occaecat aute nisi sint ut. Irure quis cillum elit sit
              et.Quis anim esse voluptate duis adipisicing sint elit in magna
              aute nostrud amet Lorem deserunt. Enim laborum proident deserunt
              dolore velit labore laboris id elit amet pariatur cillum veniam
              ipsum. Nisi cillum excepteur eiusmod minim culpa culpa non dolore.
              Cillum ullamco ullamco aliquip do culpa sit officia irure non
              Lorem commodo officia laborum. Nostrud enim incididunt Lorem minim
              ea. Ad aliquip do nostrud aute et ut.Qui enim ullamco veniam
              tempor laborum sunt quis proident tempor. Reprehenderit laborum
              aliquip cillum nostrud officia magna tempor aute eiusmod laboris
              ullamco veniam est deserunt. Aliqua quis dolor cillum voluptate
              voluptate aliqua dolore laborum ex tempor excepteur amet.
              Adipisicing consequat duis reprehenderit magna. Enim tempor
              adipisicing et aute culpa duis cupidatat Lorem magna. Aute eu
              aliqua qui velit.
            </p>
            <div className="w-full grid pt-5 ">
              <div class="flex items-center mb-3">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p class="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                  4.95 out of 5
                </p>
              </div>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                1,745 global ratings
              </p>
              <div class="flex items-center mt-4">
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  5 star
                </span>
                <div class="mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    class="h-5 bg-yellow-400 rounded"
                    style={{width:'70%'}}
                  ></div>
                </div>
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  70%
                </span>
              </div>
              <div class="flex items-center mt-4">
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  4 star
                </span>
                <div class="mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    class="h-5 bg-yellow-400 rounded"
                    style={{width:'17%'}}
                  ></div>
                </div>
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  17%
                </span>
              </div>
              <div class="flex items-center mt-4">
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  3 star
                </span>
                <div class="mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    class="h-5 bg-yellow-400 rounded"
                    style={{width:'8%'}}
                  ></div>
                </div>
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  8%
                </span>
              </div>
              <div class="flex items-center mt-4">
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  2 star
                </span>
                <div class="mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    class="h-5 bg-yellow-400 rounded"
                    style={{width:'4%'}}
                  ></div>
                </div>
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  4%
                </span>
              </div>
              <div class="flex items-center mt-4">
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  1 star
                </span>
                <div class="mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    class="h-5 bg-yellow-400 rounded"
                    style={{width:'1%'}}
                  ></div>
                </div>
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  1%
                </span>
              </div>
            </div>
            <StarRating/>
          </div>
        </div>

        <comments as div className="">
          <div className="">
            Id occaecat deserunt consequat velit. Consectetur ad minim quis in
            ullamco. Exercitation quis irure enim eiusmod mollit dolore
            cupidatat fugiat non officia ut et eu.Ipsum qui enim culpa culpa non
            officia tempor est pariatur ut ullamco occaecat. Minim nostrud culpa
            in laboris amet culpa nisi culpa laborum. Magna ullamco mollit sunt
            laboris non aliquip ad id est aliquip deserunt ea cillum. Officia
            sit ad exercitation voluptate quis commodo voluptate tempor laborum.
            Reprehenderit amet consectetur pariatur minim voluptate aute.
            Occaecat ullamco esse veniam sint esse in cupidatat veniam mollit
            veniam amet. Tempor sint quis Lorem sint.Consectetur sunt id
            cupidatat eiusmod adipisicing nostrud minim ut enim tempor dolor.
            Esse occaecat et sunt labore voluptate eu incididunt nisi pariatur
            reprehenderit id. Commodo esse laborum ut est duis consectetur
            fugiat minim ullamco et.
          </div>
        </comments>
      </body>
    </div>
  );
};

export default ItemPage;
