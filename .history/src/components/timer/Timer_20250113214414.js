import React, { useState } from 'react';

const Timer = () => {
    const [mess, setMess] = useState("doffy");
    return (
        <div>
            <input type="text"
                value={mess}
                onChange={(e) => setMess(e.target.value)};
            />
        </div>
    );
};

export default Timer;