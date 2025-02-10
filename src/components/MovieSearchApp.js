import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "./hook/useDebounce";
import LoadingSkeleton from "./loading/LoadingSkeleton";

const MovieSearchApp = () => {
    const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState("");
    const queryDebounce = useDebounce(query, 500);
    const [loading, setLoading] = useState(true);

    // Hàm fetch dữ liệu từ API
    const fetchData = async (url) => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            if (response.data.results) {
                setMovie(response.data.results);
            }
        } catch (error) {
            console.error("Lỗi khi tải dữ liệu:", error);
        } finally {
            setLoading(false);
        }
    };

    // Gọi API khi trang được tải hoặc khi có từ khóa tìm kiếm
    useEffect(() => {
        if (queryDebounce) {
            // Nếu có từ khóa tìm kiếm, gọi API tìm kiếm
            fetchData(
                `https://api.themoviedb.org/3/search/movie?api_key=733d08f3b55d5c3b516692a4f30a1ff7&query=${queryDebounce}`
            );
        } else {
            // Nếu không có từ khóa, gọi API lấy danh sách phim phổ biến
            fetchData(
                `https://api.themoviedb.org/3/movie/popular?api_key=733d08f3b55d5c3b516692a4f30a1ff7`
            );
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

            {/* Hiển thị loading skeleton khi đang tải dữ liệu */}
            {loading && (
                <div className="grid grid-cols-3 gap-10">
                    <MovieItemLoading />
                    <MovieItemLoading />
                    <MovieItemLoading />
                </div>
            )}

            {/* Hiển thị danh sách phim khi dữ liệu đã tải xong */}
            {!loading && (
                <div className="grid grid-cols-3 gap-10">
                    {movie.length > 0 &&
                        movie.map((item) => <MovieItem key={item.id} data={item} />)}
                </div>
            )}
        </div>
    );
};

// Component hiển thị loading skeleton
const MovieItemLoading = () => {
    return (
        <div className="bg-white p-3 rounded-2xl shadow-lg flex-col">
            <div className="h-[500px]">
                <LoadingSkeleton width="100%" height="100%" radius="16px" />
            </div>
            <div className="p-7 flex-1 flex-col">
                <h3 className="text-lg text-black font-semibold mb-4 !leading-loose">
                    <LoadingSkeleton height="20px" width="80%" />
                </h3>
                <p className="text-[#999] text-sm mb-6">
                    <LoadingSkeleton height="10px" width="100%" />
                    <div className="h-2"></div>
                    <LoadingSkeleton height="10px" width="100%" />
                    <div className="h-2"></div>
                    <LoadingSkeleton height="10px" width="100%" />
                </p>
                <div className="flex item-center gap-x-3 mt-auto">
                    &#9733; <span className="text-sm font-semibold text-[#333]">
                        <LoadingSkeleton height="10px" width="50px" />
                    </span>
                </div>
            </div>
        </div>
    );
};

// Component hiển thị thông tin phim
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