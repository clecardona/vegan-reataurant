import React from "react";

import arrowBack from "../../assets/icns/arrow-left-circle.svg";

// I will not reduce points, but next time store the vector as a .svg image.
// Anybody can open this component, mess with a single space between this long string and corrup the icon
// I will reduce points next time -ok

export default function ButtonBack({ label }) {
  return (
    <>
      <img className="icon-btn" src={arrowBack} alt="back" />
      <h3>{label} </h3>
    </>
  );
}
