import React, { Fragment } from 'react';
import Manufacturer from '../options/Manufacturer';
import Model from '../options/Model';
import BikeType from '../options/BikeType';
import WheelSize from '../options/WheelSize';
import ForkTravel from '../options/ForkTravel';
import RearTravel from '../options/RearTravel';
import HTAngle from '../options/HTAngle';

const AllDropdowns = ({ bikes, models, curMod, search }) => {
    return (
        <Fragment>
            <div className='drop' id='option1'>
                <label for="Manufacturer">Manufacturer </label>
                <select id='Manufacturer' name='Manufacturer' onChange={search}>
                    <option value='All'>All</option>
                    <Manufacturer bikes={bikes}/>
                </select>
            </div>

            <div className='drop' id='option2'>
                <label for="Model">Model </label>
                <select id='Model' name='Model' onChange={search}>
                    <option value='All'>All</option>
                    <Model models={models}/>
                </select>
            </div>

            <div className='drop' id='option3'>
                <label for="BikeType">Bike Type </label>
                <select id='BikeType' name='BikeType' onChange={search}>
                    <option value='All'>All</option>
                    <BikeType bikes={bikes} curMod={curMod}/>
                </select>
            </div>

            <div className='drop' id='option4'>
                <label for="WheelSize">Wheel Size </label>
                <select id='WheelSize' name='WheelSize' onChange={search}>
                    <option value='All'>All</option>
                    <WheelSize bikes={bikes} curMod={curMod}/>
                </select>
            </div>

            <div className='drop' id='option5'>
                <label for="ForkTravel">Fork Travel </label>
                <select id='ForkTravel' name='ForkTravel' onChange={search}>
                    <option value='All'>All</option>
                    <ForkTravel bikes={bikes} curMod={curMod}/>
                </select>
            </div>

            <div className='drop' id='option5'>
                <label for="RearTravel">Rear Travel </label>
                <select id='RearTravel' name='RearTravel' onChange={search}>
                    <option value='All'>All</option>
                    <RearTravel bikes={bikes} curMod={curMod}/>
                </select>
            </div>

            <div className='drop' id='option5'>
                <label for="HTAngle">HT Angle </label>
                <select id='HTAngle' name='HTAngle' onChange={search}>
                    <option value='All'>All</option>
                    <HTAngle bikes={bikes} curMod={curMod}/>
                </select>
            </div>
        </Fragment>
    )
}

export default AllDropdowns;
