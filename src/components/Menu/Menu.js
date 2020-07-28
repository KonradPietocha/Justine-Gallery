import React from 'react';
//component
import MenuList from '../MenuList/MenuList.js';
import Gallery from '../Gallery/Gallery.js';
import AboutMe from '../AboutMe/AboutMe.js';
//style
import './Menu.css';

function Menu(props) {
    //props***************************************
    const {
        menuOpen,
        menuSwitch,
        openGalleryAction,
        sliderOpenAction,
        aboutOpenAction,
        contactOpenAction
    } = props;
    //variables***********************************
    const menuArray = ["Galeria", "Slider", "O mnie", "Kontakt"];

    return (
        <>
            {menuOpen ?
                <div>
                    <nav className="menu-nav">
                        <MenuList
                            list={menuArray}
                            openGalleryAction={openGalleryAction}
                            sliderOpenAction={sliderOpenAction}
                            aboutOpenAction={aboutOpenAction}
                            contactOpenAction={contactOpenAction}
                        />
                    </nav>
                    <section>
                        {menuSwitch === "gallery" ?
                            <Gallery />
                            : null}
                        {menuSwitch === "about" ?
                            <AboutMe />
                            : null}
                    </section>
                </div>
                : null}
        </>
    );
}

export default Menu;
