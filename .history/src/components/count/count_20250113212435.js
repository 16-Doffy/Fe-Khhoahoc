// import React, { useEffect, useState } from 'react';

// const Counter = () => {
//     const [count, setCount] = useState(0);
//     useEffect (() => {
//         console.log(`count: ${count}`)
//     },[count])
//     return (
//         <div className='p-5 flex gap-x-4'>
//             <span className='text-lg'>{count}</span>
//             <button onClick={() => setCount(count + 1)} className='inline-block p-3 bg-green-500'>Tang</button>
//         </div>
//     );
// };

// export default Counter;

import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect (() => {
        console.log(`count: ${count}`)
    },[])
    return (
        <div className='p-5 '>
        <span className='text-lg font-bold'>{count }</span>
            <button onClick={() => setCount(count + 1)} className='p-3 bg-purple-300'>tang</button>
        </div>
    );
};

export default Counter;
