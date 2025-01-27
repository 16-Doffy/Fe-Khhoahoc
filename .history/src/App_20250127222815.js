import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import StopWatch from "./components/UseRef/StopWatch";

function App() {
  

  return (
    <div>
     <StopWatch />
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
