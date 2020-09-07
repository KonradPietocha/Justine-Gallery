import React from 'react';

function Images(props) {
    //props***************************************
    const { image } = props;

    return (
        <div>
            <img
                src={image}
                alt={image.replace("/Justine-Gallery/static/media/", "").split(".")[0]}
                width="200px"
                height="200px"
                onClick={() => console.log(image)}
            />
        </div>
    )
};

export default Images;