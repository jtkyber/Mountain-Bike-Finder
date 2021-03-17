import React from 'react';
import Bike from './Bike';

const BikeList = ({ bikes }) => {
    return (
        <div>
         {
            bikes.map((bike, i) => {
                return (
                    <Bike
                    key={bikes[i].model}
                    manufacturer={bikes[i].manufacturer}
                    model={bikes[i].model}
                    fullSus={bikes[i].fullSus}
                    wheelSize={bikes[i].wheelSize}
                    forkTravel={bikes[i].forkTravel}
                    shockTravel={bikes[i].shockTravel}
                    htAngle={bikes[i].htAngle}
                    link={bikes[i].link}
                    picLink={bikes[i].picLink}
                    />
                );
            })
         }
        </div>
    );
}

export default BikeList;
