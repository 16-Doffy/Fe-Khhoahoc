import axios from "axios";
import React, { useState, useEffect } from "react";
// http://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
    const [query, setQuery] = useState ("react");
  const handleFetchResponse = async () => {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${query}`
    );
    console.log(response)
    setHits(response.data?.hits || []);
  };
  useEffect(() => {
    handleFetchResponse();
  }, []);
  return (
    <div>
      {hits.length > 0 &&
        hits.map((item, index) => (
          <h3 key={item.title}>{item.title}</h3>
        ))}
    </div>
  );
};

export default HackerNews;
