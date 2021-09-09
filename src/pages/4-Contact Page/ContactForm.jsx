import React from "react";

export default function ContactForm() {
  const moment = require("moment");
  const start = moment(Date.now()).format("YYYY-mm-DD");

  function doSomething(data) {
    //send data by mail to info@gmail.com
  }

  //refactor inputs
  // add logic

  return (
    <section className="section-form_contact">
      <h2>Book a table</h2>

      <form onSubmit={doSomething}>
        <label>
          <p>Full Name</p>
          <input type="text" />
        </label>

        <label>
          <p>Your e-mail</p>

          <input type="email" />
        </label>

        <label>
          <p>Pick a date:</p>
          <input
            type="date"
            placeholder="Pick a date"
            min={start}
            max="2021-12-31"
          ></input>
        </label>

        <label>
          <p> At what time ? :</p>
          <input type="time" value="13:30" placeholder="Pick an hour"></input>
        </label>
      </form>
    </section>
  );
}
