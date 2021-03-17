import React from 'react';
import './bike.css';

const Bike = ({ manufacturer,model,fullSus,wheelSize,forkTravel,shockTravel,htAngle,link,picLink }) => {
    let hA = [];
    if (htAngle.length > 1) {
        hA = htAngle.map( value => {
            return ' ' + value + '°';
        })
    } else hA = htAngle + '°';

    const sT = shockTravel === 0 ? 'none' : shockTravel + 'mm';

    const open = () => {
        window.open(`${link}`, '_blank');
    }

    return (
        <div className='blocks'>
                <div onClick = {open} className='bikeBlock'
                style={{
                    backgroundImage: `url(${picLink})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
                >
                </div>

            <div className='info'>
                <h3>{manufacturer} {model} </h3>
                <p>Wheel Size: {wheelSize}"</p>
                <p>Fork Travel: {forkTravel}mm </p>
                <p>Shock Travel: {sT} </p>
                <p>HT Angle: {hA.toString()}</p>
            </div>
        </div>
    )
}

export default Bike;
