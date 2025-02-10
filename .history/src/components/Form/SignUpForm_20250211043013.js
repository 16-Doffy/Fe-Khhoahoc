import React from 'react';

const SignUpForm = () => {
    return (
        <div className='p-10 w-full max-w-[500px] mx-auto' >
           <div className='flex flex-col gap-4'>
            <label htmlFor="firstName">firstName</label>
            <input type="text" id='firstName' placeholder='enter your firstName'/>
           </div>
        </div>
    );
};

export default SignUpForm;