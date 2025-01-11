import React from "react";
import styled from "styled-components";
import v2 from "../../assets/img/v2.jpg";
// const StyledCard = styled.tag(h1, h2 , dic , span .....)``
// CSS-in-JS (=CSX)

const StyledCard = styled.div`
  position: relative;
`;
const CardIAMGE = styled.div`
  height: 400px;
  border-radius: 8px;
`;
const CardIMG = styled.img`
  border-radius: 18px;
  display: block;
  width: 30%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div `
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
`;
const CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;
const CardUser = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;
const UserAvatar = styled.img`
width: 30px;height: 30px;
border-radius: 100rem;
object-fit: cover;
flex-shrink: 0;
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
          </CardUser>
          <span>@Doffy</span>
          <div>256</div>
        </CardTop>
        <div>
          <h3>Comisc Preson</h3>
          <span>12,000 YSL</span>
        </div>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
