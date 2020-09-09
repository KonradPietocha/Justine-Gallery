import React from 'react';
//style
import './images.css';

function Images(props) {
    //props***************************************
    const { image, enlargeImageAction } = props;

    return (
        <div>
            <img
                src={image}
                alt={image.replace("/Justine-Gallery/static/media/", "").split(".")[0]}
                width="200px"
                height="200px"
                onClick={() => enlargeImageAction("enlarge", image)}
            />
        </div>
    )
};

export default Images;