import React from "react";

export default function ContactDescriptionSection() {
  return (
    <section className="section-contact_description">
      <img
        src="https://clecardona.com/npa/vegan_restaurant/contact/header.jpg"
        alt="img"
      />
      <h2>Opening Hours</h2>
      <div className="hours">
        <p>Monday - Friday</p>
        <h3>11-23</h3>
        <p>Saturday</p>
        <h3>18-23</h3>
        <p>Sunday</p>
        <h3>18-22</h3>
      </div>
    </section>
  );
}
