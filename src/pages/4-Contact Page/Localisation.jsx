import React from "react";
import Map from "./Localisation components/Map";

export default function Localisation() {
  const coordinates = {
    lat: 59.33832013757092,
    lng: 18.035815098670508,
  };
  return (
    <section className="section-localisation">
      <h2>Find us</h2>
      <Map coordinates={coordinates} />
    </section>
  );
}
