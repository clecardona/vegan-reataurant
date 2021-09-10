import React, { useState } from "react";
import FormItem from "../../components/FormItem";

export default function ContactForm() {
  //const moment = require("moment");
  //const start = moment(Date.now()).format("YYYY-mm-DD");

  function doSomething(data) {
    //send data by mail to info@gmail.com
    alert("well done");
  }

  //refactor inputs
  // add logic
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <section className="section-form_contact">
      <h2>Book a table</h2>
      <ul>
        <li>who?:{fullName}</li>
        <li>what?:{email} </li>
        <li>when?:{date}</li>
        <li>what time?:{time}</li>
      </ul>

      <form onSubmit={doSomething}>
        <FormItem type="text" setValue={setFullName} label="full name" />
        <FormItem type="email" setValue={setEmail} label="e-mail" />
        <FormItem
          type="date"
          setValue={setDate}
          label="pick a date"
          value={date}
        />
        <FormItem
          type="time"
          setValue={setTime}
          label="pick a time"
          value={time}
        />
        <input
          className="btn btn-main btn-send"
          type="submit"
          placeholder="Send"
          /* disabled="false" */
          value="Send"
        />
      </form>
    </section>
  );
}
