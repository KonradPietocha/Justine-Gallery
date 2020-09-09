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
                <div
                    onClick={() => prevImage()}
                >Poprzedni</div>

                <div
                    onClick={() => nextImage()}
                >Następny</div>
            </div>
            <div className="slide" style={{
                backgroundImage: `url(${pictures[picturesIndex]})`
            }} />
        </div>
    );
}

export default Slider;