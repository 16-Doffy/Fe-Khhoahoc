import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const getRandomPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]); // Store random photos
  const [nextPage, setNextPage] = useState(1);

  // handleLoadMorePhotos function wrapped in useCallback to avoid unnecessary re-creations
  const handleLoadMorePhotos = useCallback(async () => {
    const images = await getRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
  }, [randomPhotos, nextPage]);

  useEffect(() => {
    handleLoadMorePhotos(); // Load photos on initial mount
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
          onClick={handleLoadMorePhotos} // Load more photos on button click
          className="inline-block px-8 py-4 bg-purple-700 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
