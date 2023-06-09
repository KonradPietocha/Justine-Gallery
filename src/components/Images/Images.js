import React from 'react';
//style
import './images.css';

function Images(props) {
    //props***************************************
    const { image, openImage } = props;

    return (
        <div className="images">
            <img
                src={image}
                alt={image.replace("/Justine-Gallery/static/media/", "").split(".")[0]}
                onClick={openImage}
            />
        </div>
    )
};

export default Images;