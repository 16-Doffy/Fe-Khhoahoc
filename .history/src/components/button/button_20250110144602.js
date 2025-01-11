
import React from 'react';
import "./Button.scss";
import "./button.module.css"
const Button = (props) => {
  return (
   
      <button className={`button ${props.className || ""}`}>{props.children}</button>
   
  );
};

export default Button;
