import React from 'react';
import Description from './Description';
import Discount from './Discount'; 

const Highlights = () => {
    return (
        <div className="highlight_wrapper">
            <Description/>
            <Discount/>
        </div>
    );
};

export default Highlights;