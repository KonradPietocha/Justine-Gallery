import React from 'react';

function Images(props) {
    //props***************************************
    const { image } = props;

    return (
        <div>
            <img src={image} alt={image} width="200px" height="200px" />
        </div>
    )
};

export default Images;