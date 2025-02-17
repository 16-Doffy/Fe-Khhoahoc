import React, { useEffect, useRef, useState } from 'react';

const StopWatch = () => {
    const timerRef = useRef (null);
     const [count, setCount] = useState(0);
   
     const handleStart = () => {
       if(timerRef.current) return;
       timerRef.current = setInterval(() => {
         setCount(counter => counter + 1); //call back
       }, 1000);
     }
   
     const handleStop = () => {
         clearInterval(timerRef.current);
         timerRef.current = null;
     }
   
     useEffect (() => {
         return () => {
           clearInterval(timerRef.current);
         };
     }, []);
   
   
     return (
       <div>
        <h3>Timer: {count}s</h3>
        <div>
         <button onClick={handleStart}>Start</button>
         <button onClick={handleStop}>Stop</button>
        </div>
       </div>
     );
   }


export default StopWatch;
//khi state thay đổi cmponent sẽ re-render