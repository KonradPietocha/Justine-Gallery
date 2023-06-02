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
        menuSwitch,
        mobileSwitch,
        dispatchAction
    } = props;
    //variables***********************************
    const menuArray = ["Galeria", "Slajdy", "O mnie", "Kontakt"];
    const lastImage = pictures.length - 1;

    return (
        <div className="menu">
            <div onClick={() => dehazer ? dispatchAction({type: "haze"}) : null}>
                <nav className="menu-nav">
                    <MenuList
                        dehazer={dehazer}
                        menuSwitch={menuSwitch}
                        mobileSwitch={mobileSwitch}
                        list={menuArray}
                        dispatchAction={dispatchAction}
                    />
                </nav>
                <section>
                    {menuSwitch === "Galeria" ?
                        <Gallery
                            pictures={pictures}
                            dispatchAction={dispatchAction}
                        />
                        : null}
                    {menuSwitch === "Slajdy" ?
                        <Slider
                            pictures={pictures}
                            picturesIndex={indexer}
                            prevImage={() => dispatchAction({type: "prev", last: lastImage})}
                            nextImage={() => dispatchAction({type: "next", last: lastImage})}
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
                    dispatchAction={dispatchAction}
                />
            </div>
            <Footer />
        </div>
    );
}

export default Menu;
