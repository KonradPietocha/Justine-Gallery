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
            <div className="menu-list">
                {list.map((item, key) => (
                    <div
                        key={key}
                    >
                        <MenuButton
                            item={item}
                            number={key}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default MenuList;
