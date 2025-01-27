import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const timerRef = useRef (null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if(timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount(counter => counter + 1);
    }, 1000);
  }

  const handleStop = () => {

  }
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

export default App;

//khi state thay đổi cmponent sẽ re-render

//<CardList><Card2/>
// const theme = {
//   //wanna change color in the future come here to change
//   colors: {
//     blue: "#2979ff",
//   },
//   orange: "#ffa440",
// };
// {/* <ThemeProvider theme={theme}>
// <CardList>
// <Card2 secondary={true}></Card2>
// <Card2 secondary={false}></Card2>
// <Card2 secondary={true}></Card2>
// <Card2 secondary={false}></Card2>
// <Card2 secondary={true}></Card2>
//  </CardList>
// </ThemeProvider> */}
