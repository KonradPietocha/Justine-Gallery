import { useState, useEffect } from "react";
import { MENU_SECTION_NAMES } from "../../redux/constant.js";
import MenuList from "../MenuList/MenuList";
import Gallery from "../Gallery/Gallery";
import AboutMe from "../AboutMe/AboutMe";
import Slider from "../Slider/Slider";
import Contact from "../Contact/Contact";
import EnlargedImage from "../EnlargedImage/EnlargedImage";
import Footer from "../Footer/Footer";
import { pictures } from "../../url/picturesUrl";
import "./MainCard.css";
import { useDispatch, useSelector } from "react-redux";
import { getMenuSection } from "../../redux/menuSectionState.js";
import {
  getIsMobileMenu,
  setIsMobileMenu,
} from "../../redux/isMobileMenuState.js";
import { setIsMobileMode } from "../../redux/isMobileModeState.js";

function MainCard() {
  const [enlargedPicture, setEnlargedPicture] = useState<string | undefined>(
    undefined
  );
  const menuSection = useSelector(getMenuSection);
  const isMobileMenuOpen = useSelector(getIsMobileMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth < 750) dispatch(setIsMobileMode(true));
      if (window.innerWidth > 750) dispatch(setIsMobileMode(false));
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      className="main-container"
      onClick={() =>
        isMobileMenuOpen ? dispatch(setIsMobileMenu(false)) : null
      }
    >
      <nav className="menu-nav">
        <MenuList />
      </nav>
      <section>
        {menuSection === MENU_SECTION_NAMES.GALLERY.NAME ? (
          <Gallery
            pictures={pictures}
            openImage={(val) => setEnlargedPicture(val)}
          />
        ) : null}
        {menuSection === MENU_SECTION_NAMES.SLIDES.NAME ? (
          <Slider pictures={pictures} />
        ) : null}
        {menuSection === MENU_SECTION_NAMES.ABOUT_AUTHOR.NAME ? (
          <AboutMe />
        ) : null}
        {menuSection === MENU_SECTION_NAMES.CONTACT.NAME ? <Contact /> : null}
      </section>
      <EnlargedImage
        enlargedPicture={enlargedPicture}
        closeImage={() => setEnlargedPicture(undefined)}
      />
      <Footer />
    </main>
  );
}

export default MainCard;
