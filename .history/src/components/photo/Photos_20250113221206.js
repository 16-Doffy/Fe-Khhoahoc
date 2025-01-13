import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const getRandomPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]); // Lưu trữ ảnh ngẫu nhiên
  const [nextPage, setNextPage] = useState(1);
  const [loading, setLoading] = useState(false); // Trạng thái tải ảnh

  const handleLoadMorePhotos = useCallback(async () => {
    if (loading) return; // Không cho phép tải khi đang tải ảnh

    setLoading(true); // Đánh dấu bắt đầu tải ảnh

    const images = await getRandomPhotos(nextPage);
    
    // Kiểm tra nếu không có ảnh mới thì dừng
    if (images.length === 0) {
      setLoading(false);
      return;
    }

    // Cập nhật trạng thái với ảnh mới
    setRandomPhotos((prevPhotos) => [...prevPhotos, ...images]);
    setNextPage(nextPage + 1); // Cập nhật trang tiếp theo

    setLoading(false); // Đánh dấu kết thúc tải ảnh
  }, [nextPage, loading]); // `nextPage` và `loading` là dependencies

  useEffect(() => {
    handleLoadMorePhotos(); // Tải ảnh khi component được mount
  }, [handleLoadMorePhotos]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={`${item.download_url}${index}`}
              className="p-3 bg-white shadow-md rounded-lg"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleLoadMorePhotos} // Gọi hàm để tải thêm ảnh khi click
          className="inline-block px-8 py-4 bg-purple-700 text-white"
          disabled={loading} // Vô hiệu hóa nút khi đang tải ảnh
        >
          {loading ? "Loading..." : "Load more"}
        </button>
      </div>
    </div>
  );
};

export default Photos;
