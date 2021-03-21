import React from 'react';
import Options from '../components/Options';

const WheelSize = ({ bikes, curMod }) => {
    const arr = [];
    bikes.forEach(bike => {
        if ((curMod === '' || bike.model === curMod) && !arr.includes(bike.wheelSize)) {
            arr.push(bike.wheelSize);
        }
    })

    return (
        arr.sort().map(wS => {
            let units = parseInt(wS) ? '"' : '';
            return <Options option={wS} units={units} />
        })
    )
}


export default WheelSize;
