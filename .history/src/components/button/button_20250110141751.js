// Batton.js
import React from 'react';
import "./Batton.scss";

const Batton = (props) => {
  return (
    <div>
      <button className='button'>{props.children}</button>
    </div>
  );
};

export default Batton;
