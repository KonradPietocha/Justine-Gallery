import React from 'react';
//style
import './enlargedImage.css';

function EnlargedImage(props) {
    //props***************************************
    const {
        enlarger,
        dispatchAction
    } = props;

    return (
        <>
            {enlarger ?
                <div className="enlarge" onClick={() => dispatchAction({type: "shut"})}>
                    <div className="enlarge-image" style={{
                        backgroundImage: `url(${enlarger})`
                    }} />
                </div>
                : null}
        </>
    );
}

export default EnlargedImage;