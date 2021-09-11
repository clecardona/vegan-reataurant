import React from "react";

export default function FoodIcon({ reference }) {
  return (
    <img
      className="food-icon"
      src={`https://clecardona.com/npa/icns/food/${reference}.svg`}
      alt={reference}
    />

    // No comments in production -1
    /* <svg>
      className="food-icon" src={`https://clecardona.com/npa/icns/food/${reference}.svg`}
      alt={reference}
    </svg> */
  );
}
