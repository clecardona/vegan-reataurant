import React from "react";
import { useParams } from "react-router-dom";

import foodData from "../../assets/foodItems.json";
import ProductDescriptionSection from "./ProductDescriptionSection";
import IngredientsSection from "./IngredientsSection";
import NutritionFactsSection from "./NutritionFactsSection";

export default function ProductPage() {
  const { category } = useParams();
  const { productID } = useParams();
  const productIDNumber = Number.parseInt(productID);

  function getRelatedItem(id) {
    return foodData.filter((item) => {
      return item.id === id;
    });
  }
  const product = getRelatedItem(productIDNumber)[0];

  return (
    <main className="page-product">
      <ProductDescriptionSection product={product} />
      <IngredientsSection product={product} />
      <NutritionFactsSection product={product} />
      <a className="btn btn-main btn-300" href={`../${category}`}>
        <h3> Go back </h3>
      </a>
    </main>
  );
}
