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
            <div
                className={`button ${globalState.menuSection === buttonName ? "button--selected" : "button--unselected"}`}
                onClick={() => dispatchAction(switchMenu(buttonName))}
            >
                {buttonName}
            </div>
        </>
    );
}

export default MenuButton;
