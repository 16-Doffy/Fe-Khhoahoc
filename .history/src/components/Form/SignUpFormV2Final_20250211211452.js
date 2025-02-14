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
          id="firstName"
        ></MyInput>

        <MyInput
          label="Last Name"
          name="lastName"
          placeholder="Enter last name"
          id="lastName"
        ></MyInput>

        <MyInput
          type="email"
          label="enter your email adress"
          name="email"
          placeholder="Enter email "
          id="email"
        ></MyInput>

<MyTextArea
          label="enter your intro"
          name="intro"
          placeholder="Enter intro "
          id="intro"

></MyTextArea>

          <MySelectBox name="job" label="select">  
            <option value="it">IT</option>
            <option value="doctor">Doctor</option>
            <option value="firehuman">Fire Human</option>
            </MySelectBox>
       

      <MyCheckBox>
        <p>I agree the terms and condition</p>
      </MyCheckBox>

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
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error} </div>
      ) : null}
      <div className="text-sm text-red-400"></div>
    </div>
  );
};
const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        type="text"
        className="p-4 rounded-md border border-gray-600 h-[159px] resize-none"
        {...field}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error} </div>
      ) : null}
      <div className="text-sm text-red-400"></div>
    </div>
  );
};
const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="p-4 rounded-md border border-gray-600"
        {...field}
      >
        {props.children} {/* Thêm dòng này */}
      </select>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error} </div>
      ) : null}
    </div>
  );
};
const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
    <label className="flex items-center gap-2 ">
      <input type="checkbox"
        {...field}
        placeholder={props.placeholder}
      />
          {props.children}
       </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error} </div>
      ) : null}
      
    </div>
  );
};
export default SignUpFormV2Final;
