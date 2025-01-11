import React from 'react';

const Batton = (props) => {
    return (
        <div>
            <button>{props.children}</button>
        </div>
    );
};

export default Batton;