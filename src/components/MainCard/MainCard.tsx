import { useState, useEffect } from "react";
import { MENU_SECTION_NAMES } from "../../redux/constant.js";
import MenuList from "../MenuList/MenuList";
import Gallery from "../Gallery/Gallery";
import AboutMe from "../AboutMe/AboutMe";
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
import { getTheme } from "../../redux/themeState.js";

function MainCard() {
  const [enlargedPicture, setEnlargedPicture] = useState<string | undefined>(
    undefined,
  );
  const [scrollY, setScrollY] = useState(0);
  const menuSection = useSelector(getMenuSection);
  const isMobileMenuOpen = useSelector(getIsMobileMenu);
  const theme = useSelector(getTheme);
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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <main
      className="main-container"
      onClick={() =>
        isMobileMenuOpen ? dispatch(setIsMobileMenu(false)) : null
      }
    >
      <header
        className="hero-header"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="hero-content">
          <p className="hero-subtitle">Moja galeria swobodnej twórczości</p>
          <h1 className="hero-title">Justyna Piętocha</h1>
          <p className="hero-description">
            Uchwycenie emocji poprzez spontaniczne tworzenie
          </p>
          <nav className="hero-nav">
            <MenuList />
          </nav>
        </div>
      </header>
      <section>
        {menuSection === MENU_SECTION_NAMES.GALLERY.NAME ? (
          <Gallery
            pictures={pictures}
            openImage={(val) => setEnlargedPicture(val)}
          />
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
