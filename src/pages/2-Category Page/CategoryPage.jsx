import React from "react";
import { useParams, NavLink } from "react-router-dom";

//refactor - place logic where needed
import foodData from "../../assets/foodItems.json";
import menuData from "../../assets/menuItems.json";
//

import Products from "./Products";

export default function CategoryPage() {
  const { category } = useParams();

  function getRelatedFood(array, categoryOfFood) {
    return array.filter((item) => {
      return item.category === categoryOfFood;
    });
  }
  function getCategoryDescription(array, categoryOfFood) {
    return array.filter((item) => {
      return item.name === categoryOfFood;
    })[0].description;
  }
  const plats = getRelatedFood(foodData, category);
  const description = getCategoryDescription(menuData, category);

  return (
    <main className="page-category">
      <section className="section-header">
        <h2>{category}</h2>
      </section>
      <section className="section-description">
        <p>{description}</p>
      </section>
      <Products list={plats} />

      <NavLink to={`/`} className="btn btn-main btn-300">
        <h3>⬅Go back </h3>
      </NavLink>
    </main>
  );
}
