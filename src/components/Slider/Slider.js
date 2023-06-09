import React, { useState } from 'react';
import './slider.css';

function Slider(props) {
    //props***************************************
    const {
        pictures,
    } = props;

    const lastImage = pictures.length - 1;
    const [pictureIndex, setPictureIndex] = useState(0);

    const goToPreviousImage = () => {
        setPictureIndex(pictureIndex === 0 ? lastImage : pictureIndex - 1);
    }
    const goToNextImage = () => {
        setPictureIndex(pictureIndex === lastImage ? 0 : pictureIndex + 1);
    }

    return (
        <div className="slider">
            <div className='arrows'>
                <div className='arrow'
                     onClick={goToPreviousImage}>
                    <span className='arrow-icon'>&#8678;</span>
                </div>
                <div className='arrow'
                     onClick={goToNextImage}>
                    <span className='arrow-icon'>&#8680;</span>
                </div>
            </div>
            <div className="slide" style={{
                backgroundImage: `url(${pictures[pictureIndex]})`
            }} />
        </div>
    );
}

export default Slider;