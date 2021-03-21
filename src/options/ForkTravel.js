import React from 'react';
import Options from '../components/Options';

const ForkTravel = ({ bikes, bks, curMod }) => {
    const arr = [];
    let classname = '';
    let noMatch = '';
    let units = 'mm';
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
             if (bks.length === 0) {
                classname = 'crossOut';
                noMatch = '(No Match)'
            } else {
                for (let i = 0; i < bks.length; i++) {
                    if (fT === bks[i].forkTravel) {
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
            return <Options classname={classname} value={fT} option={fT + units + noMatch} />
        })
    )
}


export default ForkTravel;
