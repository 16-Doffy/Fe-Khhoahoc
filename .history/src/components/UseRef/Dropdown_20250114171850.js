import React, { useState } from 'react';

const Dropdown = () => {
 const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div className="relative w-80 ">
            <div className="p-5 border border-gray-900 rounded-lg  w-500 cursor-pointer"
            onClick={() => setShowDropdown(true)}>
            Selected
            </div>
            {showDropdown && (
                  <div className="border border-gray-200 rounded-lg absolute top-full left-0 w-500 bg-white hidden">
            <div className="p-5 cursor-pointer">JaVa</div>
            <div className="p-5 cursor-pointer">Vite</div>
            <div className="p-5 cursor-pointer">React</div>
                   </div>
             )}
        </div>
    );
};

export default Dropdown;