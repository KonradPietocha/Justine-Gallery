import React from 'react';
//style
import './enlargedImage.css';

function EnlargedImage(props) {
    //props***************************************
    const {
        enlargedPicture,
        closeImage
    } = props;

    return (
        <>
            {enlargedPicture ?
                <div className="enlarge" onClick={closeImage}>
                    <div className="enlarge-image" style={{
                        backgroundImage: `url(${enlargedPicture})`
                    }} />
                </div>
                : null}
        </>
    );
}

export default EnlargedImage;