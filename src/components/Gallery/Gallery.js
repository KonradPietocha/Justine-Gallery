import React from 'react';
//components
import Images from '../Images/Images';
//style
import './gallery.css';

function Gallery(props) {
    //props***************************************
    const { pictures, dispatchAction } = props;

    return (
        <div
            className="tiles"
        >
            {pictures.map((image, i) => (
                <Images
                    key={i}
                    image={image}
                    dispatchAction={dispatchAction}
                />
            ))}
        </div>
    );
}

export default Gallery;