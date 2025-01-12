import React, {useEffect} from 'react';

const Header = () => {
    useEffect (() => {
const handleFixedHeader = () => {
    console.log("Fixed")
};
window.addEventListener("scroll", handleFixedHeader);
    },[])
    return (
        <div className='p-5 w-full bg-black'>
            
        </div>
    );
};

export default Header;