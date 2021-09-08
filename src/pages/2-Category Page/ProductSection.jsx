import React from "react";
import { useHistory } from "react-router-dom";
//todo rename component
export default function ProductSection({ list }) {
  const history = useHistory();
  return (
    <section className="section-products ">
      {list.map((item) => {
        return (
          <article key={item.id}>
            <img src={item.imageURL} alt="img" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>

            <button
              className="btn btn-main"
              onClick={() => {
                history.push(`./${item.category}/${item.id}`);
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
