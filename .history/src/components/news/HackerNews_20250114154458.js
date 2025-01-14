import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import lodash from "lodash";
// http://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const handleFetchResponse = useRef({});
  handleFetchResponse.curent = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch {
      // console.log(response);
      setLoading(false);
      setError(`The error happend ${error}`);
    }
  };
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 100);
  useEffect(() => {
    handleFetchResponse.curent();
  }, [query]);
  return (
    <div className=" mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <input
        type="text"
        className="
          border border-blue-1000
          text-black p-5 mb-5 mt-5 block w-full
           rounded-md focus:border-blue-400"
        placeholder="Enter your keyword..."
        defaultValue={query}
        onChange={handleUpdateQuery}
      />
      {loading && (
        <div
          className=" loading w-8 h-8  rounded-full  border-blue-300 border-4 
    border-r-4 border-r-transparent animate-spin mx-auto"
        ></div>
      )}
      {!loading && error && <p>{error}</p>}
      <div class="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => (
            <h3
              className="
             p-3 bg-gray-300 rounded-sm"
              key={item.title}
            >
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;
