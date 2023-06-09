import React from 'react';
//components
import Images from '../Images/Images';
//style
import './gallery.css';

function Gallery(props) {
    //props***************************************
    const { pictures, openImage } = props;

    return (
        <div
            className="tiles"
        >
            {pictures.map((image, i) => (
                <Images
                    key={i}
                    image={image}
                    openImage={() => openImage(image)}
                />
            ))}
        </div>
    );
}

export default Gallery;