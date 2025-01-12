import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]); //dùng useState lấy data ra ngoài
  console.log("outside");
  useEffect(() => {
    getRandomPhotos().then((images) => {
        console.log("image");
      setRandomPhotos(images);
    });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {randomPhotos.map.length > 0 && randomPhotos.map((item, index) => (
        <div key={item.id} className="p-3 bg-white shadow-md rounded-lg">
          <img src={item.download_url} alt={item.author} className="w-full h-full rounded-lg object-cover"/>
        </div>
      ))}
    </div>
  );
};

export default Photos;
// https://picsum.photos/v2/list?page=2&limit=100 page