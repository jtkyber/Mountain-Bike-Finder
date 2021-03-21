import React from 'react';
import Options from '../components/Options';

const BikeType = ({ bikes, bks, curMod }) => {
    const arr = [];
    let classname = '';
    bikes.forEach(bike => {
        if ((bike.model === curMod || curMod === '') && !arr.includes(bike.bikeType)) {
            arr.push(bike.bikeType);
        }
    })

    return (
        arr.map(bT => {
            for (let i = 0; i < bks.length; i ++) {
                if (bT === bks[i].bikeType) {
                    classname = '';
                    break;
                }
                else {
                    classname = 'crossOut';
                }
            }

            return <Options option={bT} classname={classname}/>
        })
    )
}


export default BikeType;
