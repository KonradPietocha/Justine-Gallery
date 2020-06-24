import React from 'react';
//component
import MenuList from '../MenuList/MenuList.js';
//style
import './Menu.css';

function Menu(props) {
    //props***************************************
    const { state } = props;
    //variables***********************************
    let menuArray = ["Galeria", "Slider", "O mnie", "Kontakt"];

    return (
        <>
            {state.menuOpen ?
                <nav className="menu-nav">
                    <MenuList
                        list={menuArray}
                    />
                </nav>
                : null}
        </>
    );
}

export default Menu;
