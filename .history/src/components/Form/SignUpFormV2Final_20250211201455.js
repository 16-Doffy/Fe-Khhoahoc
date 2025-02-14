import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
        email: Yup.string().email("example: guest@gmail.com")
          .required("Required"),
        intro: Yup.string()
          .required("Required"),
        job: Yup.string()
          .required("Required"),
        term: Yup.boolean()
         
      })}
      onSubmit={(values) => {
        console.log("value", values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            type="text"
            placeholder="enter your firstName"
            className="p-4 rounded-md border border-gray-600"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>

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
            type="text"
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
            type="text"
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
            type="job"
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

export default SignUpFormV2Final;
