import React, { useState } from "react";

const Input = () => {
    const [fullName, setFullName] = useState("");
  return (
    <div className="p-5">
      <input
        type="text"
        name="full ame"
        id=""
        placeholder="Enter your name"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
      />
    </div>
  );
};

export default Input;
