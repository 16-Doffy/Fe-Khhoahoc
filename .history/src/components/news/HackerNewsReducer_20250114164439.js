import axios from "axios";
import React, {  useEffect, useRef, useReducer } from "react";

const intialState = {
  hits: [],
  query: "",
  loading: true,
  error: "",
  url: "http://hn.algolia.com/api/v1/search?query=''",
};
const hackerReduce = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':{
      // const newState = JSON.parse(JSON.stringify(state))
      return { ...state, hits: action.payload};
    }
    case 'SET_LOADING': {
      return { ...state, loading: action.payload}
    }
    default:
      break;
  }
};
const HackerNewsReducer = () => {
  const [state, dispatch] = useReducer(hackerReduce, intialState);

  const handleFetchResponse = useRef({});
  handleFetchResponse.curent = async () => {
    dispatch({
      type:"LOADING",
      payload:true
    })
    console.log("it is working");
    try {
      const response = await axios.get(state.url);
      dispatch({
        type:"SET_DATA",
        payload:response.data?.hits || []
      });
      dispatch({
        type:"LOADING",
        payload:false
      })
       
    } catch (error) {
      dispatch({
        type:"LOADING",
        payload:false
      })
    }
  };
  useEffect(() => {
    handleFetchResponse.curent();
  }, []);
  return (
    <div className=" mx-auto mb-5 mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 mt-5 gap-x-5">
        <input
          type="text"
          className="
          border border-blue-1000
          text-black p-5  mt-5 block w-full
           rounded-md focus:border-blue-400"
          placeholder="Enter your keyword..."
          defaultValue={state.query} //lúc này quert has data when url change, components will render
        />
        <button
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
      {!state && state.error && <p className="text-red-400 my-5">{state.error}</p>}
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
