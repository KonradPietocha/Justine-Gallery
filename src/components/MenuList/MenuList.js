import React from 'react';
//component
import MenuButton from '../MenuButton/MenuButton.js';
//style
import './MenuList.css';

function MenuList(props) {
    //props***************************************
    const { list } = props;

    return (
        <>
            <ul className="menu-list">
                {list.map((item, key) => (
                    <li
                        key={key}
                    >
                        <MenuButton
                            item={item}
                            number={key}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MenuList;
