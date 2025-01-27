import React, { useEffect, useRef } from "react";

const InputField = () => {
  const divRef = useRef();
  useEffect(() => {
    console.log(divRef.current);
    if (divRef.current) divRef.current.style.backgroundColor = "red"
  }, []);

  return <div className="input-div" ref={divRef}></div>;

};

export default InputField;
