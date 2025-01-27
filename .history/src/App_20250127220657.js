
import React from "react";
import "./App.css";

function App ()  {
  const [count, setCount] = React.useState(0);
  const handle = () => {
    const updateCount = count + 1;
    console.log(`Clicked ${updateCount} times `);
    setCount(updateCount);
  }
  console.log("Render");
  return (
  <div>
<button onClick={handle}>Click me</button>

  </div>
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
