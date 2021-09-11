import React from "react";
import menu from "../../assets/menuItems.json"; // renamed just menu, data is redudant. Is like saying carColor when speaking only of a car
import { NavLink } from "react-router-dom";
import ButtonForward from "../../components/ButtonForward";

// This could have being put inside HeroPage withouth any issues.
export default function Menu() {
  const MenuItems = menu.map((item) => {
    return (
      <article key={item.id}>
        <img src={item.imageURL} alt="img" />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <NavLink to={`/menu/${item.name}`} className="btn btn-ghost">
          <ButtonForward label="View Products" />
        </NavLink>
      </article>
    );
  });

  return (
    <section className="section-menu ">
      {/* Please put map logic as a separate component -1 */}
      {MenuItems}
    </section>
  );
}
