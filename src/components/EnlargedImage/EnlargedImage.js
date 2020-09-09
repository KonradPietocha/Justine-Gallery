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
                <div className="enlarge">
                    <div className="enlarge-tool">
                        <b onClick={() => enlargeImageAction("shut")}>
                            X
                        </b>
                    </div>
                    <div className="enlarge-image" style={{
                        backgroundImage: `url(${enlarger})`
                    }} />
                </div>
                : null}
        </>
    );
}

export default EnlargedImage;