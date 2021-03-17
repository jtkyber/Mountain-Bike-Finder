import React, { Fragment } from 'react';
import Options from '../components/Options';

const BikeType = ({ bikes }) => {
    return (
        <Fragment>
            <Options option='Full Suspension'/>
            <Options option='Hardtail'/>
        </Fragment>
    );
}


export default BikeType;
