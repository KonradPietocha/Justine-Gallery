import React from 'react';
//style
import './title.css';

function Title(props) {
    //props***************************************
    const { title, position } = props;

    return (
        <>
            {title.map((letter, key) => (
                <div key={key}
                    className={`logo-letter${key + position}`}
                >
                    {letter}
                </div>
            ))}
        </>
    );
}

export default Title;