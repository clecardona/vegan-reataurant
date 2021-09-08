import React from "react";
import ContactDescriptionSection from "./ContactDescriptionSection";
import FormContactSection from "./FormContactSection";
import LocalisationSection from "./LocalisationSection";

export default function ContactPage() {
  return (
    <main className="page-contact">
      <ContactDescriptionSection />
      <FormContactSection />
      <LocalisationSection />
    </main>
  );
}
