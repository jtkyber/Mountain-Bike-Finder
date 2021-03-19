import React from 'react';
import Options from '../components/Options';

const BikeType = ({ bikes, curMod }) => {
    const arr = [];

    bikes.forEach(bike => {
        if ((bike.model.includes(curMod) || curMod === '') && !arr.includes(bike.bikeType)) {
            arr.push(bike.bikeType);
        }
    })

    return (
        arr.map(bT => {
            return <Options option={bT} />
        })
    )
}


export default BikeType;
