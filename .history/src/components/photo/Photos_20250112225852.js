import React, { useEffect } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      console.log(response);
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
  console.log("outside");
  useEffect(() => {
    // document.title = "welcome to useEffect";
    // console.log("inside")
    getRandomPhotos().then((images) => {
        console.log("image")
    });
  }, []);
  return <div>photo</div>;
};

export default Photos;
