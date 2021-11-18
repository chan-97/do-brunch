import React from "react";
import "./CommonButton.scss";

export function CommonButton({ text, isBlue, handleClickButton }) {
  return(
    <div className={`button--default ${isBlue && "button--blue"}`}>{text}</div>
  )
}