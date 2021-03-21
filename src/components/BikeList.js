import React, {Fragment} from 'react';
import Bike from './Bike';

const BikeList = ({ bikes }) => {
    if (bikes.length === 0)
    {
        return (
            <Fragment>
                <div id='empty'>
                    <h3>no bikes match the current selections</h3>
                    <img alt="tumbleweed" src="https://media.giphy.com/media/d8lUKXD00IXSw/giphy.gif" />
                </div>
        </Fragment>
        )
    }
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
