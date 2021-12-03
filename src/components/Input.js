import React from "react";
import "./Input.scss";

export function Input({ type, placeholder, onChange, name, value }) {
  return(
    <input 
      name={name}
      onChange={onChange}
      value={value}
      className="input"
      type={type}
      placeholder={placeholder}
    />
  )
}