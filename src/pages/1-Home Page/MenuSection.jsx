import React from "react";
import menuData from "../../assets/menuItems.json";

export default function MenuSection() {
  console.log(menuData);

  return (
    <section className="section-menu ">
      {menuData.map((item) => {
        return (
          <article key={item.id}>
            <img src={item.imageURL} alt="img" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <a href={`./category/${item.name}`} className="btn btn-main">
              <h3> > View {item.name}</h3>
            </a>
          </article>
        );
      })}
    </section>
  );
}
