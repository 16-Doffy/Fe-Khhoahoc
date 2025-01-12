import React, { useEffect } from 'react';
import axios from 'axios';

const GetPhotos = () => {
     return axios
     .get('https://picsum.photos/v2/list')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
}
//https://picsum.photos/v2/list
const Photos = () => {
    // useEffect (callback, [dependencies])
    //ex: useEffect(function callback () {
    // //side-Effect
    // },[]);
    console.log("outside")
    useEffect(() => {
        document.title = "welcome to useEffect";
        console.log("inside")
    },[]);
    return (
        <div>
            photo
        </div>
    );
};

export default Photos;