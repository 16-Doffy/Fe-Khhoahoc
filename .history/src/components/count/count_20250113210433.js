import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <span>{count}</span>
            <button>Tang</button>
        </div>
    );
};

export default Counter;