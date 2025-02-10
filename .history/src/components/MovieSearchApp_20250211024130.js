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
            <div class="w-full max-w-[500px] mx-auto">
                <input type="text" className='w-full' placeholder='search'/>
            </div>
        </div>
    );
};

export default MovieSearchApp;