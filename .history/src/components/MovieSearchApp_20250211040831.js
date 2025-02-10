import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "./hook/useDebounce";
import LoadingSkeleton from "./loading/LoadingSkeleton";

const MovieSearchApp = () => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  const queryDebounce = useDebounce (query, 500);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
        setLoading(true);
      try {
        const response = await axios.get(
        
          `https://api.themoviedb.org/3/search/movie?api_key=733d08f3b55d5c3b516692a4f30a1ff7&query=${queryDebounce}`
        );
        if (response.data.results) {
          setMovie(response.data.results);
         
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      }
    }

    if (queryDebounce) { // Chỉ gọi API khi có từ khóa tìm kiếm
      fetchData();
    } else {
      setMovie([]); // Xóa danh sách phim nếu không có từ khóa
    }
  }, [queryDebounce]);

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          type="text"
          className="w-full p-5 rounded-lg border border-purple-600 shadow-[0px_0px_0px_3px(125,_106,_255,_0.2)]"
          placeholder="Search Movie"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {loading && (<div class="grid grd-cols-3 gap-10">
        <MovieItemLoading />
        <MovieItemLoading />
        <MovieItemLoading />
      </div> 
      )}

      <div className="grid grid-cols-3 gap-10">
        {!loading &&
        movie.length > 0 &&
          movie.map((item) => (
          <MovieItem key={item.id} data={item} />
          ))}
      </div>
    </div>
  );
};
const MovieItemLoading = () => {
    return (
        <div className="bg-white p-3 rounded-2xl shadow-lg flex-col">
        <div className="h-[500px]">
        <LoadingSkeleton/>
          <img
            src={`https://image.tmdb.org/t/p/original`}
            className="w-full h-full object-cover rounded-lg"
            alt=''
          />
        </div>
        <div className="p-7 flex-1 flex-col">
          <h3 className="text-lg text-black font-semibold mb-4 !leading-loose">
          <LoadingSkeleton/>
          <LoadingSkeleton/>
         <LoadingSkeleton/>
          </h3>
          <p className="text-[#999] text-sm mb-6"></p>
          <div className="flex item-center gap-x-3 mt-auto">
            &#9733; <span className="text-sm font-semibold text-[#333]"><LoadingSkeleton/></span>
          </div>
        </div>
      </div>
    )
}
const MovieItem = ({ data }) => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-lg flex-col">
      <div className="h-[500px]">
        <img
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          className="w-full h-full object-cover rounded-lg"
          alt={data.title}
        />
      </div>
      <div className="p-7 flex-1 flex-col">
        <h3 className="text-lg text-black font-semibold mb-4 !leading-loose">
          {data.title}
        </h3>
        <p className="text-[#999] text-sm mb-6">{data.overview}</p>
        <div className="flex item-center gap-x-3 mt-auto">
          &#9733; <span className="text-sm font-semibold text-[#333]">{data.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieSearchApp;