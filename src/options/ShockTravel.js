import React from 'react';
import Options from '../components/Options';

const ShockTravel = ({ bikes, curMod }) => {
    const arr = [];

    bikes.forEach(bike => {
        if ((bike.model.includes(curMod) || curMod === '') && !arr.includes(bike.shockTravel)) {
            arr.push(bike.shockTravel);
        }
    })

    const sortArr = (array) => {
        let len = array.length;
        for (let i=0; i<len; i++) {
            let min = i;
            for (let j = i+1; j<len; j++) {
                if (array[min] > array[j]) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = array[i];
                array[i] = array[min];
                array[min] = tmp;
            }
        }
        return array;
    }

    return (
        sortArr(arr).map(fT => {
            return <Options option={fT} units='mm' />
        })
    )
}


export default ShockTravel;
