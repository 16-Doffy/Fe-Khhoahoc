import React from "react";
import { useForm } from "react-hook-form"
const SignUpForm = () => {
  const {register, handleSubmit, formState} = useForm() ;
  console.log(formState)
  const onSubmited = (values) =>{ //onsubmited here = function
     console.log(values)}


  return (
    <form onSubmit={handleSubmit(onSubmited)} //here onsubmit = event
    className="p-10 w-full max-w-[500px] mx-auto">
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="enter your firstName"
          className="p-4 rounded-md border border-gray-600"
          {...register("firstName", {
              required:true,
              maxLength:10,


          })}
        />
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
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
