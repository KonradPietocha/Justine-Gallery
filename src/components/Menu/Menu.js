import React from 'react';
//component
import MenuList from '../MenuList/MenuList.js';
import Gallery from '../Gallery/Gallery.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Slider from '../Slider/Slider';
import Contact from '../Contact/Contact';
import EnlargedImage from '../EnlargedImage/EnlargedImage';
import Footer from '../Footer/Footer';
//imagesUrl
import { pictures } from '../../url/picturesUrl';
//style
import './menu.css';

function Menu(props) {
    //props***************************************
    const {
        enlarger,
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
        changeIndexAction,
        enlargeImageAction
    } = props;
    //variables***********************************
    const menuArray = ["Galeria", "Slajdy", "O mnie", "Kontakt"];
    const lastImage = pictures.length - 1;

    return (
        <div className="menu">
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
                            <Gallery
                                pictures={pictures}
                                enlargeImageAction={enlargeImageAction}
                            />
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
                        {menuSwitch === "Kontakt" ?
                            <Contact />
                            : null}
                    </section>
                    <EnlargedImage
                        enlarger={enlarger}
                        enlargeImageAction={enlargeImageAction}
                    />
                </div>
                : null}
            {menuOpen ?
                <Footer />
                : null}
        </div>
    );
}

export default Menu;
