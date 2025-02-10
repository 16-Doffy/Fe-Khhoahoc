import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const handleInputChange = (event) => {
    console.log(event.target.value); //.value de lay gtri
    setFullName(event.target.value);
  };
  const [message, setMessage] = useState("");

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };
  const [country, setCountry] = useState("");
  const handleSelectChange = (e) => {
    setCountry(e.target.value);
  };
  return (
    <div className="p-5">
      {fullName}

      <input
        type="text"
        name="full ame"
        id=""
        placeholder="Enter your name"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        onChange={handleInputChange}
      />
      {message}
      {/* <textarea
        id=""
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your messgae"
        name="message"
        onChange={handleTextareaChange}
      ></textarea>
    {country}
      <select name="country" id="" onChange={handleSelectChange}>
        <option value="VN">VN</option>
        <option value="USA">USE</option>
        <option value="JS">JS</option>
      </select> */}
    </div>
  );
};

export default Form;
