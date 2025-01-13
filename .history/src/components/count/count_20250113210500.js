import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='p-5 flex gap-x-4'>
            <span className='text-lg'>{count}</span>
            <button>Tang</button>
        </div>
    );
};

export default Counter;