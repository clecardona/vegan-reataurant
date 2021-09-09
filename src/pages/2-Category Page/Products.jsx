import React from "react";
import { NavLink } from "react-router-dom";

import foodData from "../../assets/foodItems.json";

export default function Products({ category }) {
  const listOfProducts = getRelatedFood(foodData, category);

  function getRelatedFood(array, categoryOfFood) {
    return array.filter((item) => {
      return item.category === categoryOfFood;
    });
  }

  return (
    <section className="section-products ">
      {listOfProducts.map((item) => {
        return (
          <article key={item.id}>
            <img src={item.imageURL} alt="img" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <NavLink
              to={`./${item.category}/${item.id}`}
              className="btn btn-ghost"
            >
              <h3>View product ➡</h3>
            </NavLink>
          </article>
        );
      })}
    </section>
  );
}
