import "./App.css";
import Card2 from "./components/card/card2";
import CardList from "./components/card/cardList";
import { ThemeProvider } from "styled-components";
// import Button from "./components/button/button";
// import YtList from "./components/youtube/YtList";
// {/* <YtList></YtList> */}
// {/* <Button>Primary</Button>
// <Button secondary >Secondary</Button> */}

const theme = {
  //wanna change color in the future come here to change
  colors:{
    blue:"#2979ff",
  },
  orange:"#ffa440"
};
const App = () => {
  return (


<div>
<ThemeProvider theme={theme}> 
<CardList>
<Card2 secondary={true}></Card2>
<Card2 secondary={false}></Card2>
<Card2 secondary={true}></Card2>
<Card2 secondary={false}></Card2>
<Card2 secondary={true}></Card2>
 </CardList>
</ThemeProvider>
</div>
  );
};

export default App;

// {/* <ThemeProvider theme={theme}> 
// <CardList>
// <Card2 secondary={true}></Card2>
// <Card2 secondary={false}></Card2>
// <Card2 secondary={true}></Card2>
// <Card2 secondary={false}></Card2>
// <Card2 secondary={true}></Card2>
//  </CardList>
// </ThemeProvider> */}
