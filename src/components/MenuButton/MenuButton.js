import React from 'react';
//style
import './menuButton.css';
//service
import { switchMenu } from './menuButton.service';

function MenuButton(props) {
    //props***************************************
    const { number, item, globalState, dispatchAction } = props;

    return (
        <>
            <div
                className="button"
                id={globalState.menuSection === item ? `selected-${number}` : `button-${number}`}
                onClick={() => dispatchAction(switchMenu(item))}
            >
                {item}
            </div>
        </>
    );
}

export default MenuButton;
