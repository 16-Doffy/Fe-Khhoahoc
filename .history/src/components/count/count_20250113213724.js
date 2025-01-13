import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    firstName: "Doffy",
    lastName: "Vladimir",
  });

  useEffect(() => {
    console.log("from input");
  }, [info]);

  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="lastName"
        value={info.lastName}
        onChange={(e) => //set lai state
          setInfo({
            ...info,
            firstName: e.target.value,
          })
        }
      />
      <span className="text-2xl font-bold">{count}</span>
      <button className="bg-purple-300" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
// ..info lấy ~gtri trước đó
