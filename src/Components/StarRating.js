import React from "react";
import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            id='button'
            key={index}
            className={index <= ((rating && hover) || hover) ? "on" : "off"}
            onClick={() => setRating(index)}
            onDoubleClick={() => {
              setRating(0);
              setHover(0);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
