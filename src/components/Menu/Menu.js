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
import { MENU_SECTION_NAMES } from '../../redux/constant.js';

function Menu(props) {
    //props***************************************
    const {
        globalState,
        dispatchAction
    } = props;
    //variables***********************************
    const menuArray = ["Galeria", "Slajdy", "O mnie", "Kontakt"];
    const lastImage = pictures.length - 1;

    return (
        <div className="menu">
            <nav className="menu-nav">
                <MenuList
                    globalState={globalState}
                    list={menuArray}
                    dispatchAction={dispatchAction}
                />
            </nav>
            <section>
                {globalState.menuSection === MENU_SECTION_NAMES.GALLERY.NAME ?
                    <Gallery
                        pictures={pictures}
                        dispatchAction={dispatchAction}
                    />
                    : null}
                {globalState.menuSection === MENU_SECTION_NAMES.SLIDES.NAME ?
                    <Slider
                        pictures={pictures}
                        pictureIndex={globalState.pictureIndex}
                        prevImage={() => dispatchAction({type: "prev", last: lastImage})}
                        nextImage={() => dispatchAction({type: "next", last: lastImage})}
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
                enlargedPicture={globalState.enlargedPicture}
                dispatchAction={dispatchAction}
            />
            <Footer />
        </div>
    );
}

export default Menu;
