import React, { useState } from "react";

const Input = () => {
    const [fullName, setFullName] = useState("");
    const handleInputChange = (event) => {
        console.log(event.target.value) //.value de lay gtri
        setFullName(event.target.value);
    }
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
    </div>
  );
};

export default Input;
