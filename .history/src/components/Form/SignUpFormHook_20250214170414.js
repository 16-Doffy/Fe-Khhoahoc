import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; //sd chung vs hook form
import * as yup from "yup";
import axios from "axios";
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const handleFetchResponse = useRef({});
  const [url, setUrl] = useState(
    `http://hn.algolia.com/api/v1/search?query=${query}`
  );
};
const schemaValidation = yup.object({
  firstName: yup
    .string()
    .required("pls enter your firstname")
    .max(10, "Must be 10 character or less"),
});
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });
  // console.log("error", errors);
  console.log("isSubmitting", isSubmitting);
  const onSubmited = async (values) => {
    const respone = await axios.get(
      "http://hn.algolia.com/api/v1/search?query=react"
    );
    //onsubmited here = function
    // return new Promise((resolve) => { //time wait
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 5000);
    // });
    return respone.data;
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmited)} //here onsubmit = event
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="enter your firstName"
          className="p-4 rounded-md border border-gray-600"
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
        />
        {errors?.firstName && (
          <div className="text-red-700">{errors.firstName?.message}</div>
        )}
        {/* {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-700">Must be 10 characters or less</div>
        )} */}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="enter your lastName"
          className="p-4 rounded-md border border-gray-600"
          {...register("lastName")}
        />
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="enter your email"
          className="p-4 rounded-md border border-gray-600"
          {...register("email")}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div class="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}{" "}
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
