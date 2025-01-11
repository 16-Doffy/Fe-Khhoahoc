// Batton.js
import React from 'react';
import "./Batton.scss";

const Button = (props) => {
  return (
    <div>
      <button >{props.children}</button>
    </div>
  );
};

export default Button;
