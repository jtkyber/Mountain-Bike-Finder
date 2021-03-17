import React, { Fragment } from 'react';
import Options from '../components/Options';

const Manufacturer = ({ bikes }) => {
    let temp = [];
    return (
        <Fragment>
                {
                    bikes.map(bike => {
                        if (!temp.includes(bike.manufacturer)) {
                            temp.push(bike.manufacturer);
                            return (
                                <Options
                                key={bike.model}
                                option={bike.manufacturer}
                                />
                            );
                        }

                        return null;
                    })
                }
        </Fragment>
    );
}


export default Manufacturer;
