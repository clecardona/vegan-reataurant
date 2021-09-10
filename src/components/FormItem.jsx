import React from "react";

export default function FormItem({ settings, hook }) {
  const [state, setState] = hook;
  const { label, type, placeholder, isValid } = settings;

  return (
    <label>
      <div className="label-header">
        <h4>{label}</h4>
        {!isValid && <p className="verif">Please enter a valid {type}</p>}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
    </label>
  );
}
