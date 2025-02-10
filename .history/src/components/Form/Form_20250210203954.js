import React, { useState } from "react";
import { useHandleChange } from "../hook/useHandleChange";

const Form = () => {
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault(); // để k phải load lai trang
    if (values.fullname === "") {
      setNameError("your full name is empty");
    } else {
      setNameError("");
    }
  };
  console.log("form-value", values);
  //formik + yup = validationvs react hook form
  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            placeholder="Enter your name"
            className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
            onChange={handleChange}
          />
          {nameError}
        </div>

        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter your email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          onChange={handleChange}
        />
        <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
