import React, { useState } from "react";

const Form2 = () => {
  const [values, setValues] = useState ({
    fullname: "",
    email:"",
    hobby:false,
  });
  //obj.property: dont notation
  //obj[property]
const handleInputChange = (e)=>{
  const type = e.target.type;
  setValues({
        ...values,
        [e.target.name]: type ==='checkbox' ? e.target.checked : e.target.value,
      });

  // if (type === 'checkbox'){
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.checked,
  //   });
  // }else {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // }
}
  return (
    <div className="p-5">
    <div class="flex gap-x-3">
      <input
        type="text"
        name="fullname"
        id=""
        placeholder="Enter your name"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
       onChange={handleInputChange}
      />    

   <input
        type="email"
        name="email"
        id=""
        placeholder="Enter your email"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        onChange={handleInputChange}
      />
      <input type="checkbox" 
      name="hobby"
       onChange={handleInputChange}

      />


      {/* <textarea
        id=""
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your messgae"
        name="message"
        onChange={handleTextareaChange}
      ></textarea>
    {country}
      <select name="country" id="" onChange={handleSelectChange}>
        <option value="VN">VN</option>
        <option value="USA">USE</option>
        <option value="JS">JS</option>
      </select> */}
      </div> 
    </div>
  );
};

export default Form2;
