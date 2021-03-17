import React, { Fragment } from 'react';
import Options from '../components/Options';

const ForkTravel = ({ bikes }) => {
    return (
        <Fragment>
            <Options option='100' units='mm' />
            <Options option='110' units='mm' />
            <Options option='120' units='mm' />
            <Options option='130' units='mm' />
            <Options option='140' units='mm' />
            <Options option='150' units='mm' />
            <Options option='160' units='mm' />
            <Options option='170' units='mm' />
            <Options option='180' units='mm' />
            <Options option='190' units='mm' />
            <Options option='200' units='mm' />
        </Fragment>
    );
}


export default ForkTravel;
