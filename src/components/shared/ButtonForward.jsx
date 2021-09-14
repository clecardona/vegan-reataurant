import React from "react";
import arrowForward from "../../assets/icns/arrow-right-circle.svg";

// I will not reduce points, but next time store the vector as a .svg image.
// Anybody can open this component, mess with a single space between this long string and corrup the icon
// I will reduce points next time -ok
export default function ButtonForward({ label }) {
  return (
    <>
      <h3>{label} </h3>
      <img className="icon-btn" src={arrowForward} alt="back" />
    </>
  );
}
