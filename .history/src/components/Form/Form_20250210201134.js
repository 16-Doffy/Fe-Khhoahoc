import React, { useState } from "react";
import { useHandleChange } from "../hook/useHandleChange";

const Form = () => {
const {values, handleChange} = useHandleChange({
  fullname: "",
  email:"",
  hobby:false,
});
console.log("form-value", values)
  return (
    <div className="p-5">
    <div class="flex gap-x-3">
      <input
        type="text"
        name="fullname"
        id=""
        placeholder="Enter your name"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
       onChange={handleChange}
      />    

   <input
        type="email"
        name="email"
        id=""
        placeholder="Enter your email"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        onChange={handleChange}
      />
      <input type="checkbox" 
      name="hobby"
       onChange={handleChange}

      />
      </div> 
    </div>
  );
};

export default Form;
