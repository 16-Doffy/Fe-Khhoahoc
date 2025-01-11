
import React from 'react';
import "./Button.scss";

const Button = (props) => {
  return (
    <div>
      <button >{props.children}</button>
    </div>
  );
};

export default Button;
