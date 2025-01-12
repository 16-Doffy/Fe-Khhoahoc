import React, { useEffect } from 'react';
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