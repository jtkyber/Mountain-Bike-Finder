import React from 'react';
import Options from '../components/Options';

const ForkTravel = ({ bikes, curMod }) => {
    const arr = [];

    bikes.forEach(bike => {
        if ((bike.model.includes(curMod) || curMod === '') && !arr.includes(bike.forkTravel)) {
            arr.push(bike.forkTravel);
        }
    })

    return (
        arr.sort().map(fT => {
            return <Options option={fT} units='mm' />
        })
    )
}


export default ForkTravel;
