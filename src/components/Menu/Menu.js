import React from 'react';
//component
import MenuList from '../MenuList/MenuList.js';
import Gallery from '../Gallery/Gallery.js';
//style
import './Menu.css';

function Menu(props) {
    //props***************************************
    const { menuOpen, menuSwitch } = props;
    //variables***********************************
    const menuArray = ["Galeria", "Slider", "O mnie", "Kontakt"];
    
    return (
        <>
            {menuOpen ?
                <div>
                    <nav className="menu-nav">
                        <MenuList
                            list={menuArray}
                        />
                    </nav>
                    <section>
                        {menuSwitch === "gallery" ?
                            <Gallery />
                        : null}
                    </section>
                </div>
                : null}
        </>
    );
}

export default Menu;
