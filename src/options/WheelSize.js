import React, { Fragment } from 'react';
import Options from '../components/Options';

const WheelSize = ({ bikes }) => {
    return (
        <Fragment>
            <Options option='27.5' units='"' />
            <Options option='29' units='"' />
            <Options option='Mullet' />
        </Fragment>
    );
}


export default WheelSize;
