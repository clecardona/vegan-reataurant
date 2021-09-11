import React, { useState } from "react";
import FormItem from "../../components/FormItem";
import FormSubmit from "../../components/FormSubmit";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const isNameValid = fullName.length > 0;
  const isEmailValid = email.length > 3;

  const moment = require("moment");
  const today = moment(Date.now()).format("YYYY-MM-DD");
  const isDateValid =
    moment(date, "YYYY-MM-DD", true).isValid() && today <= date;
  const isTimeValid = moment(time, "HH:mm", true).isValid();
  const isAllValid = isNameValid && isEmailValid && isDateValid && isTimeValid;

  const messageValidation = `Merci ${fullName}(${email}) your reservation request for the ${date} at ${time} has been succesfully sent`;

  // Function lenght
  // Now that you have one folder per page,
  // you could have put this inside "4-contact-page/form.json"
  // i teach about this in class, thats why im putting the -1
  const nameSettings = {
    label: "Enter your full name",
    type: "text",
    placeholder: "Clement Cardona",
    isValid: isNameValid,
  };
  const emailSettings = {
    label: "Enter your email",
    type: "email",
    placeholder: "clecardona@gmail.com",
    isValid: isEmailValid,
  };
  const dateSettings = {
    label: "Enter a date",
    type: "date",
    placeholder: "YYYY-MM-DD",
    isValid: isDateValid,
  };
  const timeSettings = {
    label: "Enter a time",
    type: "time",
    placeholder: "HH:MM",
    isValid: isTimeValid,
  };

  return (
    <section className="section-form_contact">
      <h2>Book a table</h2>
      <form
        onSubmit={() => {
          alert(messageValidation);
        }}
      >
        <FormItem settings={nameSettings} hook={[fullName, setFullName]} />
        <FormItem settings={emailSettings} hook={[email, setEmail]} />
        <FormItem settings={dateSettings} hook={[date, setDate]} />
        <FormItem settings={timeSettings} hook={[time, setTime]} />
        <FormSubmit isAllValid={isAllValid} />
      </form>
    </section>
  );
}
