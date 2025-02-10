import React, {  } from "react";
import { useHandleChange } from "../hook/useHandleChange";

const Form = () => {
const {values, handleChange} = useHandleChange({
  fullname: "",
  email:"",
  hobby:false,
});
console.log("form-value", values)
//formik vs react hook form
  return (
    <form className="p-5">
    <div class="flex gap-x-3">
      <input
        type="text"
        name="fullname"      
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
      {/* <input type="checkbox" 
      name="hobby"
       onChange={handleChange}

      /> */}

      <button >Submit</button>
      </div> 
    </form>
  );
};

export default Form;
