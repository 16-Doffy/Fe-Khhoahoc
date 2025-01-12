import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
    //   console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const Photos = () => {
  // useEffect (callback, [dependencies])
  //ex: useEffect(function callback () {
  // //side-Effect
  // },[]);
 const [randomPhotos, setRandomPhotos] = useState([]);
  console.log("outside");
  useEffect(() => {
    // document.title = "welcome to useEffect";
    // console.log("inside")
    getRandomPhotos().then((images) => {
        console.log("image")
        setRandomPhotos(images);
    });
  }, []);
  return <div>{JSON.stringify(randomPhotos)}</div>;
};

export default Photos;
