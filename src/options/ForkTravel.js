import React from 'react';
import Options from '../components/Options';

const ForkTravel = ({ bikes, bks, curMod }) => {
    const arr = [];
    let classname = '';
    bikes.forEach(bike => {
        if ((bike.model === curMod || curMod === '') && !arr.includes(bike.forkTravel)) {
            arr.push(bike.forkTravel);
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
            for (let i = 0; i < bks.length; i ++) {
                if (fT === bks[i].forkTravel) {
                    classname = '';
                    break;
                }
                else {
                    classname = 'crossOut';
                }
            }
            return <Options classname={classname} option={fT} units='mm' />
        })
    )
}


export default ForkTravel;
