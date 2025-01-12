import React from "react";
import v2 from "../../assets/img/v2.jpg";
import heart from "../../assets/img/heart.png";

const CardTailWind = (props) => {
  return (
    <div className="relative w-[400px] mx-auto mt-12">
      <div className="card-image h-[400px] rounded-lg overflow-hidden">
        <img
          src={
            "https://cdn.dribbble.com/userupload/17117959/file/original-2a01fcbb866d356d539462a5ab1b2d00.jpg?format=webp&resize=450x338&vertical=center"
          }
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      <div className="absolute left-2/4 transform -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-x-3">
            <img 
              src={v2}
              alt=""
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <div className="font-light text-base">@Doffy</div>
          </div>
          <div className="flex items-center gap-x-3">
            <img className="w-5 h-5" src={heart} alt="heart" />
            <div className="font-bold">256</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium">Comics Person</div>
          <div className="text-lg font-bold text-transparent bg-clip-text bg-radiant">
            12,000 YSL
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTailWind;