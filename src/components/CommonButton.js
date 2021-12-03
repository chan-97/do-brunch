import React from "react";
import "./CommonButton.scss";

export function CommonButton({ text, isBlue, handleClickButton, large }) {
  return(
    <div 
      onClick={handleClickButton}
      className={`button--default ${isBlue && "button--blue"} ${large && "button--large"}`}
    >
      {text}
    </div>
  )
}