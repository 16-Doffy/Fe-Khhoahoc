import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormV2Final = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false, //check box
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("example: guest@gmail.com")
          .required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        term: Yup.boolean(),
      })}
      onSubmit={(values) => {
        console.log("value", values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <MyInput
          label="First Name"
          name="firstName"
          placeholder="Enter first name"
        >
          {" "}
        </MyInput>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Last Name</label>
          <Field
            name="lastName"
            type="text"
            placeholder="enter your lastName"
            className="p-4 rounded-md border border-gray-600"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email">Email address</label>
          <Field
            name="email"
            type="email"
            placeholder="enter your email address"
            className="p-4 rounded-md border border-gray-600"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="intro">Intro</label>
          <Field
            name="intro"
            placeholder="enter your intro"
            className="p-4 rounded-md border border-gray-600 h-[150px] resize-none"
            as="textarea"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="job">Select your Job</label>
          <Field
            name="job"
            className="p-4 rounded-md border border-gray-600"
            as="select"
          >
            <option value="it">IT</option>
            <option value="doctor">Doctor</option>
            <option value="firehuman">Fire Human</option>
          </Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <Field
            name="term"
            type="checkbox"
            placeholder="enter your term"
            className="p-4 rounded-md border border-gray-600"
          ></Field>
          <p>I accept the terms and condition</p>
          <div className="text-sm text-red-500">
            <ErrorMessage name="term"></ErrorMessage>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

// useField => ko muon su dung nhung cai co san
// destructoring duoi dang obj
//res parameter ... *3
//spread paremeter =>  {...field[0]}
const MyInput = ({ label, ...props }) => {
  //lable, name, placeholder *3
  //[field, meta] => index 0, 1
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-600"
        {...field}
        placeholder={props.placeholder}
      />
      {meta.touched && field[1].error ? (
        <div className="text-sm text-red-500">{field[1].error} </div>
      ) : null}
      <div className="text-sm text-red-400"></div>
    </div>
  );
};

export default SignUpFormV2Final;
