import React from "react";
import foodData from "../../assets/foodItems.json";
import menuData from "../../assets/menuItems.json";

import { useParams } from "react-router-dom";
import ProductSection from "./ProductSection";

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
      <ProductSection list={plats} />
      <a className="btn btn-main btn-300" href="/">
        <h3> Go back </h3>
      </a>
    </main>
  );
}
