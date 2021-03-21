import React from 'react';
import Options from '../components/Options';

const WheelSize = ({ bikes, bks, curMod }) => {
    const arr = [];
    let classname = '';
    let noMatch = '';
    let units = '"';
    bikes.forEach(bike => {
        if ((curMod === '' || bike.model === curMod) && !arr.includes(bike.wheelSize)) {
            arr.push(bike.wheelSize);
        }
    })

    return (
        arr.sort().map(wS => {
             if (bks.length === 0) {
                classname = 'crossOut';
                noMatch = '(No Match)'
            } else {
                for (let i = 0; i < bks.length; i ++) {
                    if (wS === bks[i].wheelSize) {
                        classname = '';
                        noMatch = '';
                        break;
                    }
                    else {
                        classname = 'crossOut';
                        noMatch = '(No Match)';
                    }
                }
            }

            units = parseInt(wS) ? '"' : '';
            return <Options classname={classname} value={wS} option={wS + units + noMatch} units={units} />
        })
    )
}


export default WheelSize;
