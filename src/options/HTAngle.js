import React from 'react';
import Options from '../components/Options';

const HTAngle = ({ bikes, bks, curMod }) => {
    const arr = [];
    let classname = '';
    let noMatch = '';
    let units = '°';
    bikes.forEach(bike => {
        bike.htAngle.forEach(angle => {
            if ((curMod === '' || bike.model === curMod) && !arr.includes(Math.floor(angle)))
            {
                arr.push(Math.floor(angle));
            }
        })
    })

    return (
        arr.sort().map(hT => {
             if (bks.length === 0) {
                classname = 'crossOut';
                noMatch = '(No Match)'
            } else {
                let foundMatch = false;
                hT = hT + '-' + (hT + 0.9);
                loop1:
                for (let bk of bks) {
                    for (let angle of bk.htAngle) {
                        const curHtOption = parseInt(hT.substring(0, 2));
                        if ((angle >= curHtOption) && (angle < (curHtOption + 1))) {
                            foundMatch = true;
                            break loop1;
                        }
                    }
                }

                if (foundMatch === true) {
                        classname = '';
                        noMatch = ''
                } else {
                    classname = 'crossOut';
                    noMatch = '(No Match)'
                }
            }

            return <Options classname={classname} value={hT} option={hT + units + noMatch} />
        })
    )
}


export default HTAngle;
