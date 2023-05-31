import React from 'react';
import './slider.css';

function Slider(props) {
    //props***************************************
    const {
        pictures,
        picturesIndex,
        prevImage,
        nextImage
    } = props;

    return (
        <div className="slider">
            <div className='arrows'>
                <div className='arrow'
                     onClick={() => prevImage()}>
                    <span className='arrow-icon'>&#8678;</span>
                </div>
                <div className='arrow'
                     onClick={() => nextImage()}>
                    <span className='arrow-icon'>&#8680;</span>
                </div>
            </div>
            <div className="slide" style={{
                backgroundImage: `url(${pictures[picturesIndex]})`
            }} />
        </div>
    );
}

export default Slider;