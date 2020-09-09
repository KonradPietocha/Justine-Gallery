import React from 'react';
//components
import Images from '../Images/Images';
//style
import './gallery.css';

function Gallery(props) {
    //props***************************************
    const { pictures, enlargeImageAction } = props;

    return (
        <div
            className="tiles"
        >
            {pictures.map((image, i) => (
                <Images
                    key={i}
                    image={image}
                    enlargeImageAction={enlargeImageAction}
                />
            ))}
        </div>
    );
}

export default Gallery;