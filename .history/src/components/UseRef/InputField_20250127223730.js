import React, { useEffect, useRef } from "react";

const InputField = () => {
  const divRef = useRef();
  useEffect(() => {
    console.log(divRef.current);
    if (divRef.current) divRef.current.style.backgroundColor = "red"
  }, []);

  return <div className="input-div" ref={divRef}>
    <input type="text" placeholder="auto forcus input" className="inline-block p-5 border border-gray-500"/>
  </div>;

};

export default InputField;
