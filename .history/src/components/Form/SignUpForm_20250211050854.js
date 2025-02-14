import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const error = {};
  if (!values.firstName) {
    error.firstName = "Required";
  } else if (values.firstName.length > 20) {
    error.firstName = "must be 20 character or less";
  }


  if (!values.lastName) {
    error.lastName = "Required";
  } else if (values.lastName.length > 20) {
    error.lastName = "must be 20 character or less";
  }
  return error;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName:"",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="enter your firstName"
          className="p-4 rounded-md border border-gray-600"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="enter your lastName"
          className="p-4 rounded-md border border-gray-600"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>

      {formik.errors.firstName || formik.errors.lastName? <div className="text-sm text-red-500">{formik.errors.firstName || formik.errors.lastName} </div> : null }
        <div>
        <button  type="submit" className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg">
          Submit
        </button>
        </div>
    </form>
  );
};

export default SignUpForm;
