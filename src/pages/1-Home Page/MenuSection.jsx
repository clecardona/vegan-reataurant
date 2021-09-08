import React from "react";
import menuData from "../../assets/menuItems.json";
import { useHistory } from "react-router-dom";

export default function MenuSection() {
  const history = useHistory();

  return (
    <section className="section-menu ">
      {menuData.map((item) => {
        return (
          <article key={item.id}>
            <img src={item.imageURL} alt="img" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            {/*    <a href={`./menu/${item.name}`} className="btn btn-main">
              <h3> > View {item.name}</h3>
            </a> */}

            <button
              className="btn btn-main"
              onClick={() => {
                history.push(`./menu/${item.name}`);
              }}
            >
              <h3>View product</h3>
            </button>
          </article>
        );
      })}
    </section>
  );
}
