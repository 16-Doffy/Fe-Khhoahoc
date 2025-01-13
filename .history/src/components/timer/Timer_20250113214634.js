import React, { useEffect, useState } from "react";

const Timer = () => {
  const [mess, setMess] = useState("doffy");
  useEffect(() => {
    setInterval(() => {
      console.log(mess);
    }, );
  }, [mess]);
  return (
    <div>
      <input
        type="text"
        value={mess}
        onChange={(e) => setMess(e.target.value)}
      />
    </div>
  );
};

export default Timer;
