import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/category/dishes">Dishes</Link>
        </li>
        <li>
          <Link to="/category/desserts">Desserts</Link>
        </li>
        <li className="link-home">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category/drinks">Drinks</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}
