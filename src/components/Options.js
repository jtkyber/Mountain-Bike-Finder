import React from 'react';

const Options = ({ option, units }) => {
    return (
        <option value={option}>{option}{units}</option>
    );
}


export default Options;
