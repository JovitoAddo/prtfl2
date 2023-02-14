import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ShowRecommendation from './showRecommendation';

function RecommendationProduct() {
  const [dataProduct, setDataProduct] = useState([]);
  const [random, setRandom] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/"
    );
    setDataProduct(data)
  }

  useEffect(() => {
    // const getProducts = async () => {
    //   const getDataAPICatShop = await fetch("https://fakestoreapi.com/products/");
    //   const resultData = await getDataAPICatShop.json();
    //   setDataProduct(resultData);

    //   // return () => {
    //   //     getData = false;
    //   // }
    // }
    getData();
  }, [])

  useEffect(() => {
    if (dataProduct.length > 0) {
      const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

      const newData = shuffle(dataProduct);

      // console.log(newData)

      let limitData = [];
      for (let i = 0; i < 4; i++) {
        limitData.push(newData[i]);
      }
      // console.log(limitData);

      setRandom(limitData);
    }
  }, [dataProduct])


  console.log(dataProduct);
  console.log(random);
  return (
    <div>
      <div className="row mt-4">
        <h3 className="fw-bolder">Recommendation Product</h3>
      </div>
      <div className="row mt-4 justify-content-center">
        <ShowRecommendation random={random} />
      </div>
    </div>
  )
}

export default RecommendationProduct;
