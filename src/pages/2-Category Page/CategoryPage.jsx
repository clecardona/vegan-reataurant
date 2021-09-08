import React from "react";
import foodData from "../../assets/foodItems.json";

import { useParams } from "react-router-dom";
import ProductSection from "./ProductSection";

export default function CategoryPage() {
  const { category } = useParams();

  console.log(foodData);

  function getRelatedFood(categoryOfFood) {
    return foodData.filter((item) => {
      return item.category === categoryOfFood;
    });
  }

  const plats = getRelatedFood(category);

  console.log(plats);

  return (
    <main className="page-category">
      <section className="section-header">
        <h2>{category}</h2>
      </section>
      <section className="section-description">description</section>
      <ProductSection list={plats} />
      <a className="btn btn-main btn-300" href="/">
        <h3> Go back </h3>
      </a>
    </main>
  );
}
