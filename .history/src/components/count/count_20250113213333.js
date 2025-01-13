import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [info, setInfo] = useState({
        firstName:"Doffy",
        lastName:"Vladimir"
    });

    useEffect (() => {
        console.log("from input")
    },[info])

    return (
       <div>
        <input type="text"
            name='firstName'
            value={info.firstName}
            onChange={(e) => setInfo({
                ...info,
                firstName:e.target.value,
            })}
        />
        <span className='text-2xl font-bold'>{count}</span>
        <button onClick={() => setCount(count + 1)}></button>
       </div>
    );
};

export default Counter;


