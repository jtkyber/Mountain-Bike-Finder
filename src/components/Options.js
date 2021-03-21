import React from 'react';

const Options = ({ option, classname, value }) => {
    return (
        <option className={classname} value={value}>{option}</option>
    );
}


export default Options;
