import React from "react";
import "./CommonButton.scss";

export function CommonButton({ text, isBlue, handleClickButton }) {
  return(
    <div 
      onClick={handleClickButton}
      className={`button--default ${isBlue && "button--blue"}`}
    >
      {text}
    </div>
  )
}