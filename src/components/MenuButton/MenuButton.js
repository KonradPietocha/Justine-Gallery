import React from 'react';
//style
import './MenuButton.css';
//function
import { switchMenu } from '../../functions/switchMenu.js';

function MenuButton(props) {
    //props***************************************
    const { number, item, menuSwitch } = props;

    return (
        <>
            <div
                className="button"
                id={menuSwitch === item ? `selected-${number}` : `button-${number}`}
                onClick={switchMenu(props)}
            >
                {item}
            </div>
        </>
    );
}

export default MenuButton;
