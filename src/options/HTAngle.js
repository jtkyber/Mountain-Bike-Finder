import React from 'react';
import Options from '../components/Options';

const HTAngle = ({ bikes, curMod }) => {
    const arr = [];

    bikes.forEach(bike => {
        bike.htAngle.forEach(angle => {
            if ((curMod === '' || bike.model.includes(curMod)) && !arr.includes(Math.floor(angle)))
            {
                arr.push(Math.floor(angle));
            }
        })
    })

    return (
        arr.sort().map(hT => {
            hT = hT + '-' + (hT + 0.9);
            return <Options option={hT} units='°' />
        })
    )
}


export default HTAngle;
