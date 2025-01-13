import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
// http://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
    const [query, setQuery] = useState ("react");
    const handleFetchResponse = useRef ({});
    handleFetchResponse.curent = async () => {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${query}`
    );
    console.log(response)
    setHits(response.data?.hits || []);
  };
  useEffect(() => {
    handleFetchResponse.curent();
  }, []);
  return (
    <div>
    <input type="text"
        className=" border border-blue-300 text-black p-5 mb-5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
    />
      {hits.length > 0 && 
        hits.map((item, index) => (
          <h3 key={item.title}>{item.title}</h3>
        ))}
    </div>
  );
};

export default HackerNews;
