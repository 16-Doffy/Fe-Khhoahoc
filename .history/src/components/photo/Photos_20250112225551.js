import React, { useEffect } from 'react';
import axios from 'axios';

const GetPhotos = () => {
     return axios
     .get('https://picsum.photos/v2/list')
     .then((response) =>  {
    // handle success
    console.log(response);
  })
  .catch( error => {
    // handle error
    console.log(error);
  })
  
}

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