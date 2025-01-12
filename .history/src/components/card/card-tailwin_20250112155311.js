import React from "react";
import v2 from "../../assets/img/v2.jpg";
import heart from "../../assets/img/heart.png";
const CardTailWind = () => {
  return (
    <div className="relative">
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
    </div>
  );
};

export default CardTailWind;
