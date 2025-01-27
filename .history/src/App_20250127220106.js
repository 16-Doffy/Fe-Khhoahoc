
import React from "react";
import "./App.css";
import Dropdown from "./components/UseRef/Dropdown";
const App = () => {
  //const inputRef, abcRef= react.useRef(initialVaLue)
  const countRef = React.useRef(0);
  //truy xuất giá trị Ref 
  console.log(countRef.current)
  return (
    <Dropdown></Dropdown>
  );
};

export default App;













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
