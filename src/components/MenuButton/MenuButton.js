import React from 'react';
//style
import './menuButton.css';
//service
import { switchMenu } from './menuButton.service';

function MenuButton(props) {
    //props***************************************
    const { buttonName, globalState, dispatchAction } = props;

    return (
        <>
            <button
                type="button"
                className={`button ${globalState.menuSection === buttonName ? "button--selected" : "button--unselected"}`}
                onClick={() => dispatchAction(switchMenu(buttonName))}
            >
                {buttonName}
            </button>
        </>
    );
}

export default MenuButton;
