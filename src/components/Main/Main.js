import React, { useState, useLayoutEffect } from 'react';
import { MENU_SECTION_NAMES, MOBILE_MENU, MOBILE_MODE } from '../../redux/constant.js';
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
import './main.css';

function Main(props) {
    //props***************************************
    const {
        globalState,
        dispatchAction
    } = props;

    useLayoutEffect(() => {
        function updateSize() {
          if (window.innerWidth < 750) dispatchAction({type: MOBILE_MODE.OPEN});
          if (window.innerWidth > 750) dispatchAction({type: MOBILE_MODE.CLOSE});
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    });

    const [enlargedPicture, setEnlargedPicture] = useState(null);

    return (
        <main
            className="main-container"
            onClick={() => globalState.isMobileMenuOpen ? dispatchAction({type: MOBILE_MENU.CLOSE}) : null}
        >
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
        </main>
    );
}

export default Main;
