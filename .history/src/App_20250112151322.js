import "./App.css";
import Card from "./components/card/card";
import Card2 from "./components/card/card2";
import CardList from "./components/card/cardList";
// import Button from "./components/button/button";
// import YtList from "./components/youtube/YtList";
// {/* <YtList></YtList> */}
// {/* <Button>Primary</Button>
// <Button secondary >Secondary</Button> */}
const App = () => {
  return (
<div> 
<CardList>
<Card2 secondary={true}></Card2>
<Card2 secondary={false}></Card2>
<Card2 secondary={true}></Card2>
<Card2 secondary={true}></Card2>
<Card2 secondary={true}></Card2>
 </CardList>
</div>
  );
};

export default App;


