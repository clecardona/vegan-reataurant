import React from "react";
import { NavLink } from "react-router-dom";

export default function Products({ list }) {
  return (
    <section className="section-products ">
      {list.map((item) => {
        return (
          <article key={item.id}>
            <img src={item.imageURL} alt="img" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <NavLink
              to={`./${item.category}/${item.id}`}
              className="btn btn-main"
            >
              <h3>View product ➡</h3>
            </NavLink>
          </article>
        );
      })}
    </section>
  );
}
