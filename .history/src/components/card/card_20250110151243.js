import React from "react";
import styled from "styled-components";
import v2 from "../../assets/img/v2.jpg";
// const StyledCard = styled.tag(h1, h2 , dic , span .....)``
// CSS-in-JS (=CSX)

const StyledCard = styled.div`
    position: relative;
`;
const CardIAMGE = styled.div `
height: 400px;
border-radius: 8px;
`;
const CardIMG = styled.img `
    width: 300px;
    display: block;
    width: 100%;height: 100%;
    object-fit: cover;
    border-radius: inherit;
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

      <div>
        <div>
          <div>
            <img src={v2} alt="" />
          </div>
          <span>@Doffy</span>
          <div>256</div>
        </div>
        <div>
          <h3>Comisc Preson</h3>
          <span>12,000 YSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
