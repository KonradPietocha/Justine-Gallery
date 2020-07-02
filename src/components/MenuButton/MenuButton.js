import React from 'react';
//style
import './MenuButton.css';

function MenuButton(props) {
    //props***************************************
    const { number, item } = props;

    return (
        <>
            <div
                className="button"
                id={`button-${number}`}
            >
                {item}
            </div>
        </>
    );
}

export default MenuButton;
