import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleFixedHeader = () => {
      const header = document.getElementById("header");
      if(window.scrollY >100) header.classList.add("fixed");
      else header.classList.remove("fixed");
    };
    window.addEventListener("scroll", handleFixedHeader);
    
    return () => {
      window.removeEventListener("scroll", handleFixedHeader);
    };
  }, []);
  return <div className="p-5 w-full bg-black" id="header"></div>;
};

export default Header;


// import CardTailWind from "./components/card/card-tailwin";
// import Button from "./components/button/button";
// import YtList from "./components/youtube/YtList";
// {/* <YtList></YtList> */}
// {/* <Button>Primary</Button>
// <Button secondary >Secondary</Button> */}
// const StyledTaiw = styled.div `
// display: grid;
// grid-template-columns: repeat(4, 1fr);
// `;
// import Photos from "./components/photo/Photos";
// const App = () => {
//   return (
//     // <StyledTaiw>
//     //   <CardTailWind primary={true} frontSize="text-2xl"> </CardTailWind>
//     //   <CardTailWind> </CardTailWind>
//     //   <CardTailWind primary={true}> </CardTailWind>
//     //   <CardTailWind > </CardTailWind>
//     // </StyledTaiw>
//     <Photos />
//   );
// };

// export default App;
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
