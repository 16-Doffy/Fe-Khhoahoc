import React, { useEffect } from 'react';
import axios from 'axios';

const getRandomPhotos = () => {
     return axios
     .get('https://picsum.photos/v2/list')
     .then((response) =>  {
   
    console.log(response);
  })
  .catch( error => {
 
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