import React from "react";
import menuData from "../../assets/menuItems.json";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <section className="section-menu ">
      {menuData.map((item) => {
        return (
          <article key={item.id}>
            <img src={item.imageURL} alt="img" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <NavLink to={`/menu/${item.name}`} className="btn btn-main">
              <h3>View products ➡</h3>
            </NavLink>
          </article>
        );
      })}
    </section>
  );
}
