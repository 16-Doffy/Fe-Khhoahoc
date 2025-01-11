import React from "react";
import styled from "styled-components";
import v2 from "../../assets/img/v2.jpg";
// const StyledCard = styled.tag(h1, h2 , dic , span .....)``
// CSS-in-JS (=CSX)

const StyledCard = styled.div`
  position: relative;
  width: 400px;
`;
const CardIAMGE = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardIMG = styled.img`
  border-radius: 18px;
  display: block;
 
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div `
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 100%;
    padding: 10px;
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    margin: 5px 55px;
`;
const CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;
const CardUser = styled.div`
    display: flex;
    align-items: center;
   
    column-gap: 10px;
`;
const UserAvatar = styled.img`
width: 30px;
height: 30px;
border-radius: 100rem;
object-fit: cover;
flex-shrink: 0;
display: flex;
justify-content: flex-start;
`;
const CardFooter = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;
const CardTitle = styled.h3`
font-size: 18px;
font-weight: 500px;
color: black;
`;
const CardNumber = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(to right, #e66465, #9198e5);
  -webkit-background-clip: text;
  color: transparent;  
`;

const Card = () => {
  return (
    <StyledCard>
      <CardIAMGE>
        <CardIMG
          src="https://cdn.dribbble.com/userupload/17117959/file/original-2a01fcbb866d356d539462a5ab1b2d00.jpg?format=webp&resize=450x338&vertical=center"
          alt=""
        />
      </CardIAMGE>

      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar src={v2} alt="" />
            <span>@Doffy</span>
            
          </CardUser>
          <div>256</div>
        </CardTop>
        <CardFooter>
          <CardTitle>Comisc Preson</CardTitle>
          <CardNumber>12,000 YSL</CardNumber>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
