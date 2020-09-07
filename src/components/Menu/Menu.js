import React from 'react';
//component
import MenuList from '../MenuList/MenuList.js';
import Gallery from '../Gallery/Gallery.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Slider from '../Slider/Slider';
//images
import { pictures } from '../../url/picturesUrl';
//style
import './Menu.css';

function Menu(props) {
    //props***************************************
    const {
        indexer,
        dehazer,
        menuOpen,
        menuSwitch,
        mobileSwitch,
        openGalleryAction,
        sliderOpenAction,
        aboutOpenAction,
        contactOpenAction,
        hazeAction,
        changeIndexAction
    } = props;
    //variables***********************************
    const menuArray = ["Galeria", "Slajdy", "O mnie", "Kontakt"];
    const lastImage = pictures.length - 1;

    return (
        <>
            {menuOpen ?
                <div onClick={() => dehazer ? hazeAction("haze") : null}>
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
                            hazeAction={hazeAction}
                        />
                    </nav>
                    <section>
                        {menuSwitch === "Galeria" ?
                            <Gallery />
                            : null}
                        {menuSwitch === "Slajdy" ?
                            <Slider
                                pictures={pictures}
                                picturesIndex={indexer}
                                prevImage={() => changeIndexAction("prev", lastImage)}
                                nextImage={() => changeIndexAction("next", lastImage)}
                            />
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
