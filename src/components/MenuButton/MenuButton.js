import React from 'react';
//style
import './MenuButton.css';

function MenuButton(props) {
    //props***************************************
    const { number, item } = props;

    return (
        <>
            <button
                className={`menu-button${number}`}
            >
                {item}
            </button>
        </>
    );
}

export default MenuButton;
