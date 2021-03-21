import React from 'react';
import Options from '../components/Options';

const HTAngle = ({ bikes, bks, curMod }) => {
    const arr = [];
    let classname = '';

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
            } else {
                classname = 'crossOut';
            }

            return <Options classname={classname} option={hT} units='°' />
        })
    )
}


export default HTAngle;
