import React from 'react';
import Options from '../components/Options';

const RearTravel = ({ bikes, curMod }) => {
    const arr = [];

    bikes.forEach(bike => {
        if ((bike.model.includes(curMod) || curMod === '') && !arr.includes(bike.rearTravel)) {
            arr.push(bike.rearTravel);
        }
    })

    return (
        arr.sort().map(fT => {
            return <Options option={fT} units='mm' />
        })
    )
}


export default RearTravel;
