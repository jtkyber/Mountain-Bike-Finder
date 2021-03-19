import React from 'react';
import Options from '../components/Options';

const ShockTravel = ({ bikes, curMod }) => {
    const arr = [];

    bikes.forEach(bike => {
        if ((bike.model.includes(curMod) || curMod === '') && !arr.includes(bike.shockTravel)) {
            arr.push(bike.shockTravel);
        }
    })

    return (
        arr.sort().map(fT => {
            return <Options option={fT} units='mm' />
        })
    )
}


export default ShockTravel;
