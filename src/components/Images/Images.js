import React from 'react';
//style
import './images.css';

function Images(props) {
    //props***************************************
    const { image, dispatchAction } = props;

    return (
        <div className="images">
            <img
                src={image}
                alt={image.replace("/Justine-Gallery/static/media/", "").split(".")[0]}
                onClick={() => dispatchAction({type: "enlarge", url: image})}
            />
        </div>
    )
};

export default Images;