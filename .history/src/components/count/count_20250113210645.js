import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect (() => {
        console.log("count");
    })
    return (
        <div className='p-5 flex gap-x-4'>
            <span className='text-lg'>{count}</span>
            <button className='inline-block p-3 bg-green-500'>Tang</button>
        </div>
    );
};

export default Counter;