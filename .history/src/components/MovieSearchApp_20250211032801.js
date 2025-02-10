import axios from "axios";
import React, { useEffect, useState } from "react";
//733d08f3b55d5c3b516692a4f30a1ff7
//https://api.themoviedb.org/3/movie/550?api_key=733d08f3b55d5c3b516692a4f30a1ff7&query=''
// image API https://image.tmdb.org/t/p/original/poster_path

const MovieSearchApp = () => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=733d08f3b55d5c3b516692a4f30a1ff7&query=${query}`
      );
      if (response.data.results) {
        setMovie(response.data.results);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="p-10">
      <div class="w-full max-w-[500px] mx-auto mb-20">
        <input
          type="text"
          className="w-full p-5 rounded-lg border border-purple-600 
                shadow-[0px_0px_0px_3px(125,_106,_255,_0.2)]
                "
          placeholder="search"
        />
      </div>
      <div class="grid grid-cols-3 gap-10">
        {movie.length > 0 &&
          movie.map((item, index) => <MovieItem key={item.id} data={item}></MovieItem>)}
      </div>
    </div>
  );
};

const MovieItem = ({data}) => {
    
  return (
    <div className="bg-white p-3 rounded-2xl shadow-lg flex-col">
      <div className="h-[500px]">
        <img
        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <div class="p-7 flex-1 flex-col">
        <h3 className="text-lg text-black font-semibold mb-4 !leading-loose">
        {data.title}
        </h3>
        <p className="text-[#999] text-sm mb-6">
         {data.overview}
        </p>
        <div class="flex item-center gap-x-3 mt-auto">
          &#9733; <span className="text-sm font-semibold text-[#333]">{data.vote_average}</span>{" "}
        </div>
      </div>
    </div>
  );
};
export default MovieSearchApp;
