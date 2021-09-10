import React from "react";

export default function FormItem({ type, setValue, label, value }) {
  return (
    <label>
      <p>{label}</p>
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        /* onFocus={(e) => {
          e.target.value = "";
        }} */
        placeholder={`Enter your ${label}...`}
        value={value}
      />
    </label>
  );
}
