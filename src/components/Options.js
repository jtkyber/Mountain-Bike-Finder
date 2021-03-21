import React from 'react';

const Options = ({ option, units, classname }) => {
    return (
        <option className={classname} value={option}>{option}{units}</option>
    );
}


export default Options;
