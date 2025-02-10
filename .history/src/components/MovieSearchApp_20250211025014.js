import axios from 'axios';
import React, { useEffect } from 'react';
//733d08f3b55d5c3b516692a4f30a1ff7 
//https://api.themoviedb.org/3/movie/550?api_key=733d08f3b55d5c3b516692a4f30a1ff7&query=''
const MovieSearchApp = () => {
    useEffect (() => {
       async function fetchData(){
        const result = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=733d08f3b55d5c3b516692a4f30a1ff7&query=''`)
        console.log(result.data)
    }
    fetchData();
    },[])
    return (
        <div className='p-10'>
            <div class="w-full max-w-[500px] mx-auto mb-20">
                <input type="text" 
                className='w-full p-5 rounded-lg border border-purple-600 
                shadow-[0px_0px_0px_3px(125,_106,_255,_0.2)]
                ' 
                placeholder='search'/>
            </div>
            <div class="grid grid-cols-3 gap-10">
            <MovieItem></MovieItem>
            <MovieItem></MovieItem>
            <MovieItem></MovieItem>

            </div>
        </div>
    );
};

const MovieItem =()=>{
    return (
        <div className='bg-white p-3 rounded-2xl shadow-sm'>
            <div className='h-[297px]'>
                <img src="https://plus.unsplash.com/premium_photo-1739095638086-f86a16d1a076?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
                className='w-full h-full object-cover rounded-lg'
                alt=""/>
            </div>
            <div class="p-7">
                <h3 className='text-xl text-black font-semibold mb-4'>
                Hotel is heaven
                </h3>
            </div>
        </div>
    )
}
export default MovieSearchApp;