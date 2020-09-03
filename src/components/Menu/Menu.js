import React from 'react';
//component
import MenuList from '../MenuList/MenuList.js';
import Gallery from '../Gallery/Gallery.js';
import AboutMe from '../AboutMe/AboutMe.js';
//functions
import { menuHazer } from '../../functions/menuHazer.js';
//style
import './Menu.css';

function Menu(props) {
    //props***************************************
    const {
        dehazer,
        menuOpen,
        menuSwitch,
        mobileSwitch,
        openGalleryAction,
        sliderOpenAction,
        aboutOpenAction,
        contactOpenAction,
        dehazeAction,
        hazeAction
    } = props;
    //variables***********************************
    const menuArray = ["Galeria", "Slajdy", "O mnie", "Kontakt"];

    return (
        <>
            {menuOpen ?
                <div onClick={() => menuHazer(dehazer, hazeAction)}>
                    <nav className="menu-nav">
                        <MenuList
                            dehazer={dehazer}
                            menuSwitch={menuSwitch}
                            mobileSwitch={mobileSwitch}
                            list={menuArray}
                            openGalleryAction={openGalleryAction}
                            sliderOpenAction={sliderOpenAction}
                            aboutOpenAction={aboutOpenAction}
                            contactOpenAction={contactOpenAction}
                            dehazeAction={dehazeAction}
                        />
                    </nav>
                    <section>
                        {menuSwitch === "Galeria" ?
                            <Gallery />
                            : null}
                        {menuSwitch === "O mnie" ?
                            <AboutMe />
                            : null}
                    </section>
                </div>
                : null}
        </>
    );
}

export default Menu;
