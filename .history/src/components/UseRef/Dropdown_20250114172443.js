import React, { useState } from 'react';
import ar from "../../assets/img/ar.png"
const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative w-80">
      <div 
        className="p-5 border border-gray-900 rounded-lg cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Selected <span className='ml-9'>&#8595;</span>
      </div>

      {showDropdown && (
        <div className="border border-gray-200 rounded-lg absolute top-full left-0 w-500 bg-white">
          <div className="p-5 cursor-pointer">JaVa</div>
          <div className="p-5 cursor-pointer">Vite</div>
          <div className="p-5 cursor-pointer">React</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
