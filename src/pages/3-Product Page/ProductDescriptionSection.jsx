import React from "react";

export default function ProductDescriptionSection({ product }) {
  //console.log(product);
  return (
    <section className="section-product_description">
      <img alt="img" src={product.imageURL} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </section>
  );
}
