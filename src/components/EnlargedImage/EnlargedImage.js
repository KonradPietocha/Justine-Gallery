import React from 'react';
//style
import './enlargedImage.css';

function EnlargedImage(props) {
    //props***************************************
    const {
        enlargedPicture,
        dispatchAction
    } = props;

    return (
        <>
            {enlargedPicture ?
                <div className="enlarge" onClick={() => dispatchAction({type: "shut"})}>
                    <div className="enlarge-image" style={{
                        backgroundImage: `url(${enlargedPicture})`
                    }} />
                </div>
                : null}
        </>
    );
}

export default EnlargedImage;