import React from "react";
//todo rename component
export default function ProductSection({ list }) {
  return (
    <section className="section-products ">
      {list.map((item) => {
        return (
          <article key={item.id}>
            <img src={item.imageURL} alt="img" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={`./${item.category}/${item.id}`} className="btn btn-main">
              <h3> > View product</h3>
            </a>
          </article>
        );
      })}
    </section>
  );
}
