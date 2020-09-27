import React from 'react';
//style
import './enlargedImage.css';

function EnlargedImage(props) {
    //props***************************************
    const {
        enlarger,
        enlargeImageAction
    } = props;

    return (
        <>
            {enlarger ?
                <div className="enlarge" onClick={() => enlargeImageAction("shut")}>
                    <div className="enlarge-image" style={{
                        backgroundImage: `url(${enlarger})`
                    }} />
                </div>
                : null}
        </>
    );
}

export default EnlargedImage;