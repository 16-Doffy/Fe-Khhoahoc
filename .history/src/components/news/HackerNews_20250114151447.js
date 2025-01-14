import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
// http://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
    const [query, setQuery] = useState ("react");
    const [loading, setLoading] = useState(true);
    const handleFetchResponse = useRef ({});
    handleFetchResponse.curent = async () => {
      setLoading(true);
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${query}`
    );
    console.log(response)
    setHits(response.data?.hits || []);
    setLoading(false);
  };
  useEffect(() => {
    handleFetchResponse.curent();
  }, [query]);
  return (
    <div>
    <input type="text"
        className=" border border-blue-900 text-black p-5 mb-5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
    />
    {loading && <div className=" loading w-8 h-8  rounded-full  border-blue-300 border-4 
    border-r-4 border-r-transparent animate-spin"></div> }
      {!loading && 
      hits.length > 0 && 
        hits.map((item, index) => (
          <h3 key={item.title}>{item.title}</h3>
        ))}
    </div>
  );
};

export default HackerNews;
