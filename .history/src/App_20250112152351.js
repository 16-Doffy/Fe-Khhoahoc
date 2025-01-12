import "./App.css";
import Card2 from "./components/card/card2";
import CardList from "./components/card/cardList";
import { ThemeProvider } from "styled-components";
// import Button from "./components/button/button";
// import YtList from "./components/youtube/YtList";
// {/* <YtList></YtList> */}
// {/* <Button>Primary</Button>
// <Button secondary >Secondary</Button> */}

const theme = {};
const App = () => {
  return (
<ThemeProvider theme={theme}> 
<CardList>
<Card2 secondary={true}></Card2>
<Card2 secondary={false}></Card2>
<Card2 secondary={true}></Card2>
<Card2 secondary={false}></Card2>
<Card2 secondary={true}></Card2>
 </CardList>
</ThemeProvider>
  );
};

export default App;


