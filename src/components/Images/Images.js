import React from 'react';
import barrack from '../../images/barrack.jpg';

function Images({ image }) {

    return (
        <div>
            <img src={image} width="50px" height="50px" />
        </div>
    )
};

export default Images;