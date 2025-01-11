import React from "react";
import styled from "styled-components";
import v2 from "../../assets/img/v2.jpg";

const Card = () => {
  return (
    <div>
      <img
        src="https://cdn.dribbble.com/userupload/17117959/file/original-2a01fcbb866d356d539462a5ab1b2d00.jpg?format=webp&resize=450x338&vertical=center"
        alt=""
      />
      <div>
        <div>
          <div>
            
              <img src={v2} alt="" />
              <span>@Doffy</span>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
