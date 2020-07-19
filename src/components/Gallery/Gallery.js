import React from 'react';
import Images from '../Images/Images';
import pictures from '../../url/picturesUrl';

function Gallery() {
        return (
            <div>
                <div>{pictures.map((image, i) => (
                    <Images key={i} image={image} />
                ))}</div>
            </div>
        );
}

export default Gallery;