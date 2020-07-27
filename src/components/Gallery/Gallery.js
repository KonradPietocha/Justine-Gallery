import React from 'react';
//components
import Images from '../Images/Images';
//variables
import { pictures } from '../../url/picturesUrl';
//style
import './Gallery.css';

function Gallery() {
    return (
        <div
            className="tiles"
        >
            {pictures.map((image, i) => (
                <Images key={i} image={image} />
            ))}
        </div>
    );
}

export default Gallery;