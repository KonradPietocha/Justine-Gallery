import React, { useState } from 'react';
import { MENU_SECTION_NAMES } from '../../redux/constant.js';
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
        globalState,
        dispatchAction
    } = props;

    const [enlargedPicture, setEnlargedPicture] = useState(null);

    return (
        <div className="menu">
            <nav className="menu-nav">
                <MenuList
                    globalState={globalState}
                    dispatchAction={dispatchAction}
                />
            </nav>
            <section>
                {globalState.menuSection === MENU_SECTION_NAMES.GALLERY.NAME ?
                    <Gallery
                        pictures={pictures}
                        openImage={(image) => setEnlargedPicture(image)}
                    />
                    : null}
                {globalState.menuSection === MENU_SECTION_NAMES.SLIDES.NAME ?
                    <Slider
                        pictures={pictures}
                    />
                    : null}
                {globalState.menuSection === MENU_SECTION_NAMES.ABOUT_AUTHOR.NAME ?
                    <AboutMe />
                    : null}
                {globalState.menuSection === MENU_SECTION_NAMES.CONTACT.NAME ?
                    <Contact />
                    : null}
            </section>
            <EnlargedImage
                enlargedPicture={enlargedPicture}
                closeImage={() => setEnlargedPicture(null)}
            />
            <Footer />
        </div>
    );
}

export default Menu;
