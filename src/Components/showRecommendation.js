import React from "react";
import { Link, Navigate } from "react-router-dom";

function ShowRecommendation({ random }) {

  return (
    <div className="flex justify-center gap-2">
      {random.length > 0 &&
        random.map((product) => (
          <div className="">
            <div className="" key={product.id}>
              <img
                src={product.image}
                className="w-80 border-2 border-customblack border-opacity-10"
                alt={product.title}
                
              />
              <div className="card-body">
                <h5 className="card-title text-start mb-0">
                  {product.title.substring(0, 23)}...
                </h5>
                <p className="card-text text-start lead fw-bold">
                  Rp {product.price}
                </p>
                <Navigate
                  to={`/catalogue/${product.id}`}
                  replace={true}
                  
                >
                    <button className="border-2 border-customred hover:scale-125 ">Buy Now</button>
                  
                </Navigate>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ShowRecommendation;
