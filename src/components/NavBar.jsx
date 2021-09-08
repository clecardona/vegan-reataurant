import React from "react";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  const history = useHistory();

  return (
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              history.push("/menu/dishes");
            }}
          >
            Dishes
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              history.push("/menu/desserts");
            }}
          >
            Desserts
          </button>
        </li>

        <li className="link-home">
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              history.push("/menu/drinks");
            }}
          >
            Drinks
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              history.push("/contact");
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
