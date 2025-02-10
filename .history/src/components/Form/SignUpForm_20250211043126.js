import React from 'react';

const SignUpForm = () => {
    return (
        <div className='p-10 w-full max-w-[500px] mx-auto' >
           <div className='flex flex-col gap-2'>
            <label htmlFor="firstName">First Name</label>
            <input
             type="text"
              id='firstName' 
              placeholder='enter your firstName'
                className='p-4 rounded-md border border-gray-600'
              />
           </div>
        </div>
    );
};

export default SignUpForm;