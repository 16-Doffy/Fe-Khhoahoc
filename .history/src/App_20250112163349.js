import styled from "styled-components";
import "./App.css";
import CardTailWind from "./components/card/card-tailwin";


// import Button from "./components/button/button";
// import YtList from "./components/youtube/YtList";
// {/* <YtList></YtList> */}
// {/* <Button>Primary</Button>
// <Button secondary >Secondary</Button> */}
const StyledTailw = styled.div `
     display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 90px 30px;
    padding: 30px;
`;
const App = () => {
  return (
    <StyledTailw>
      <CardTailWind primary={true}> </CardTailWind>
      <CardTailWind > </CardTailWind>
      <CardTailWind primary={true}> </CardTailWind>
      <CardTailWind > </CardTailWind>
    </StyledTailw>
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
