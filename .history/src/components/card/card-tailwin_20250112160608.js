import React from "react";
import v2 from "../../assets/img/v2.jpg";
import heart from "../../assets/img/heart.png";
const CardTailWind = () => {
  return (
    <div className="relative">
      <div class="w-full rounded-lg h-[400px]">
        <img
          src={
            "https://cdn.dribbble.com/userupload/17117959/file/original-2a01fcbb866d356d539462a5ab1b2d00.jpg?format=webp&resize=450x338&vertical=center"
          }
          alt=""
        />
      </div>

      <div class="card-content">
        <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10
        rounded-[20px] p-5 w-[calc(100%-36px)]">
          <div className="flex justify-betweem items-center mb-8">
            <div className="flex items-center gap-x-3">
              <img 
                src={v2}
                alt=""
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                // style={{ width: "50px", height: "50px", borderRadius: "50px" }}
              />
            </div>
            <div className="font-light text-base">@Doffy</div>
          </div>
          <div className="flex items-center gap-x-3">
            <img className="card-inimg" src={heart} alt="heart" />
            <div className="card-in">256</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium">Comics Person</div>
          <div className="text-lg font-bold">12,000 YSL</div>
        </div>
      </div>
    </div>
  );
  //lg=18px medium=500px
};

export default CardTailWind;
