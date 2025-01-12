import React from "react";
import styled from "styled-components";
import v2 from "../../assets/img/v2.jpg";
import heart from "../../assets/img/heart.png";
const StyledCard = styled.div`
  position: relative;
  width: 400px;
  margin: 50px auto;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      border-radius: 18px;
      display: block;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    padding: 10px;
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    margin: 5px 55px;
    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;

      .card-user {
        display: flex;
        align-items: center;
        column-gap: 10px;

        .card-username {
          font-weight: 300;
          font-size: 16px;
        }
      }
      .card-icm {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        padding-right: 30px;
        .card-inimg {
          width: 10%;
          img {
            width: 10%;
          }
        }
        .card-in {
          font-size: 15px;
          font-weight: bold;
        }
      }
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .card-title {
        font-size: 18px;
        font-weight: 500;
        color: black;
      }
      .card-number {
        font-size: 18px;
        font-weight: bold;
        background: linear-gradient(to right, #e66465, #9198e5);
        -webkit-background-clip: text;
        color: transparent;
        background-clip: text;
      }
    }
  }
`;

//crt+alt+L =>consolog
const Card2 = () => {
  return (
    <StyledCard>
      <div class="card-image">
        <img
          src={
            "https://cdn.dribbble.com/userupload/17117959/file/original-2a01fcbb866d356d539462a5ab1b2d00.jpg?format=webp&resize=450x338&vertical=center"
          }
          alt=""
        />
      </div>

      <div class="card-content">
        <div className="card-top">
          <div className="card-user">
            <div className="card-avatar">
              <img
                src={v2}
                alt=""
                className="vuto"
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
              />
            </div>
            <div className="card-username">@Doffy</div>
          </div>
          <div className="card-icm">
            <img className="card-inimg" src={heart} alt="heart" />
            <div className="card-in">256</div>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-title">Comics Person</div>
          <div className="card-number">12,000 YSL</div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;
