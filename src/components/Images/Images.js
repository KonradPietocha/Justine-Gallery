import React from 'react';

function Images({ image }) {
    let styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        width: '100px',
        height: '100px',
        margin: '0',
        display: 'inline-block'
    };

    return (
        <div>
            <div style={styles}></div>
        </div>
    )
};

export default Images;