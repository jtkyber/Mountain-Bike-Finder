import React from 'react';
import Options from '../components/Options';

const BikeType = ({ bikes, bks, curMod }) => {
    const arr = [];
    let classname = '';
    let noMatch = '';
    bikes.forEach(bike => {
        if ((bike.model === curMod || curMod === '') && !arr.includes(bike.bikeType)) {
            arr.push(bike.bikeType);
        }
    })

    return (
        arr.map(bT => {
            if (bks.length === 0) {
                classname = 'crossOut';
                noMatch = '(No Match)'
            } else {
                for (let i = 0; i < bks.length; i ++) {
                    if (bT === bks[i].bikeType) {
                        classname = '';
                        noMatch = '';
                        break;
                    }
                    else {
                        classname = 'crossOut';
                        noMatch = '(No Match)'
                    }
                }
            }

            return <Options option={bT + noMatch} value={bT} classname={classname}/>
        })
    )
}


export default BikeType;
