import React from 'react';
//style
import './menuButton.css';
//service
import { switchMenu } from './menuButton.service';

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
