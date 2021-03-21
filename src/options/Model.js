import React, { Fragment } from 'react';
import Options from '../components/Options';

const Model = ({ models }) => {
    return (
        <Fragment>
                {
                    models.map(bike => {
                        return (
                            <Options
                            key={bike.model}
                            option={bike.model}
                            value={bike.model}
                            />
                        );
                    })
                }
            })
        }
        </Fragment>
    );
}


export default Model;
