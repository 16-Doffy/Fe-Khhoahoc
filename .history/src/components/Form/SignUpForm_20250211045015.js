import React from 'react';
import { useFormik } from 'formik';

const validate = (values) => {
    const error = {};
    if(!values.firstName){
        error.firstName = "Required"
    }
    return error;
}

const SignUpForm = () => {
    const formik = useFormik({
        initialValues:{
            firstName:"",

        },
        validate,
        onSubmit:values => {
            console.log(values)
        }
    });
    return (
        <form onSubmit={formik.handleSubmit} className='p-10 w-full max-w-[500px] mx-auto' >
           <div className='flex flex-col gap-2 mb-5'>
            <label htmlFor="firstName">First Name</label>
            <input
             type="text"
             name='firstName'
              id='firstName' 
              placeholder='enter your firstName'
                className='p-4 rounded-md border border-gray-600'
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              <button
              className='w-full p-4 bg-blue-600 text-white font-semibold rounded-lg' 
          
              >Submit</button>
           </div>
        </form>
    );
};

export default SignUpForm;