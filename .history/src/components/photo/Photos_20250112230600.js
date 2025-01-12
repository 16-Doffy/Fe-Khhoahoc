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
  return <div>{randomPhotos.map((item, index) => (
    <div key={index}>{item.id} </div>
  ))}</div>;
};

export default Photos;
