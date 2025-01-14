import axios from "axios";
import { reduce } from "lodash";
import React, { useState, useEffect, useRef, useReducer } from "react";

const intialState = {
  hits: [],
  query: "",
  loading: true,
  error: "",
  url: "http://hn.algolia.com/api/v1/search?query=''",
};
const hackerReduce = (state, action) => {
  return state;
};
const HackerNewsReducer = () => {
  const [state, dispatch] = useReducer(hackerReduce, intialState);

  const handleFetchResponse = useRef({});
  handleFetchResponse.curent = async () => {
    console.log("it is working");
    try {
    } catch (error) {

    }
  };
  useEffect(() => {
    handleFetchResponse.curent();
  }, []);
  return (
    <div className=" mx-auto mb-5 mt-5 p-5 rounded-lg shadow-md w-2/4">
    
        <button
          // onClick={() =>
          //   setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
          // }
          className="bg-blue-500 text-white font-semibold mt-5 p-1 flex-shrink-0 rounded-lg"
        >
          Fetching
        </button>
      </div>
      {state.loading && ( //state lấy từ initial
        <div
          className=" loading w-8 h-8  rounded-full  border-blue-300 border-4 
    border-r-4 border-r-transparent animate-spin mx-auto"
        ></div>
      )}
      {!loading && error && <p className="text-red-400 my-5">{state.error}</p>}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 className=" p-3 bg-gray-300 rounded-sm" key={item.title}>
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsReducer;
