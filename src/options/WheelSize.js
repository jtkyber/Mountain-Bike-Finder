import React from 'react';
import Options from '../components/Options';

const WheelSize = ({ bikes, bks, curMod }) => {
    const arr = [];
    let classname = '';
    bikes.forEach(bike => {
        if ((curMod === '' || bike.model === curMod) && !arr.includes(bike.wheelSize)) {
            arr.push(bike.wheelSize);
        }
    })

    return (
        arr.sort().map(wS => {
            for (let i = 0; i < bks.length; i ++) {
                if (wS === bks[i].wheelSize) {
                    classname = '';
                    break;
                }
                else {
                    classname = 'crossOut';
                }
            }

            let units = parseInt(wS) ? '"' : '';
            return <Options classname={classname} option={wS} units={units} />
        })
    )
}


export default WheelSize;
