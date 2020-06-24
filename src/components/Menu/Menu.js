import React from 'react';
//style
import './Menu.css';

function Menu(props) {
    //props***************************************
    const { state } = props;

    return (
        <>
            {state.menuOpen ?
                <nav className="menu-nav">
                    <ul>
                        <li>TEST</li>
                        <li>TEST</li>
                        <li>TEST</li>
                        <li>TEST</li>
                    </ul>
                </nav>
                : null}
        </>
    );
}

export default Menu;
