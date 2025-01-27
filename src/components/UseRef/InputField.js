import React, { useEffect, useRef } from "react";

const InputField = () => {
  const divRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    // console.log(divRef.current);
    // if (divRef.current) divRef.current.style.backgroundColor = "red"
    // inputRef.current.focus();
    if(inputRef.current) inputRef.current.focus();
  }, []);

  return <div className="input-div" ref={divRef}>
    <input
    ref={inputRef}
     type="text" placeholder="auto forcus input" 
    className="inline-block p-5 border border-gray-500 focus:border-blue-500"/>
  </div>;

};

export default InputField;
