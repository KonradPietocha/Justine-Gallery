import React, { useState } from 'react';
//component
import MenuList from '../MenuList/MenuList.js';
import Gallery from '../Gallery/Gallery.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Slider from '../Slider/Slider';
//functions
import { menuHazer } from '../../functions/menuHazer.js';
//images
import { pictures } from '../../url/picturesUrl';
//style
import './Menu.css';

function Menu(props) {
    //props***************************************
    const {
        //arrIndex,
        dehazer,
        menuOpen,
        menuSwitch,
        mobileSwitch,
        openGalleryAction,
        sliderOpenAction,
        aboutOpenAction,
        contactOpenAction,
        dehazeAction,
        hazeAction,
        //prevIndexAction,
        //nextIndexAction
    } = props;
    //variables***********************************
    const menuArray = ["Galeria", "Slajdy", "O mnie", "Kontakt"];
    const lastImage = pictures.length - 1;
    //state
    const [picturesIndex, setPicturesIndex] = useState(0);
    //functions
    const prevImage = () => {
        setPicturesIndex(
            picturesIndex === 0 ? lastImage : picturesIndex - 1
        );
    };
    const nextImage = () => {
        setPicturesIndex(
            picturesIndex === lastImage ? 0 : picturesIndex + 1
        );
    };

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
                        {menuSwitch === "Slajdy" ?
                            <Slider 
                                pictures={pictures}
                                picturesIndex={picturesIndex}
                                prevImage={prevImage}
                                nextImage={nextImage}
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
