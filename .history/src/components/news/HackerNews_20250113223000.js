import axios from "axios";
import React, { useState, useEffect } from "react";
// http://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);

  const handleFetchResponse = async () => {
    const response = await axios.get(
      "http://hn.algolia.com/api/v1/search?query=react"
    );
    setHits(response.data || "");
  };
  useEffect(() => {
    handleFetchResponse();
  }, []);
  return (
    <div>
      {hits.length > 0 &&
        hits.map((item, index) => {
          <h3 key={item.title}>{item.title}</h3>;
        })}
    </div>
  );
};

export default HackerNews;
