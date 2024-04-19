import React from "react";
import css from "./Button.module.css"; 

export const Button = ({ selected = false, type = "button", children, ...otherProps }) => {
  return (
    <button className={`${css.btn} ${selected ? css.selected : ''}`} type={type} {...otherProps}>
      {children}
    </button>
  );
};
