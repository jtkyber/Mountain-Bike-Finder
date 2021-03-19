import React from 'react';
import Options from '../components/Options';

const WheelSize = ({ bikes, curMod }) => {
    const acc = [];
    const arr = [];
    bikes.forEach(bike => {
        if ((curMod !== '' || curMod === '') && bike.model.includes(curMod) && !acc.includes(bike.wheelSize)) {
            arr.push(bike.wheelSize);
            acc.push(bike.wheelSize);
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
