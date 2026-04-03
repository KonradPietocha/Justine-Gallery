import { useDispatch, useSelector } from "react-redux";
import { MENU_SECTION_NAMES } from "../../redux/constant";
import MenuButton from "../MenuButton/MenuButton.js";
import { getIsMobileMode } from "../../redux/isMobileModeState.js";
import {
  getIsMobileMenu,
  setIsMobileMenu,
} from "../../redux/isMobileMenuState.js";
import { getTheme, toggleTheme } from "../../redux/themeState.js";
import "./MenuList.css";

function MenuList() {
  const menuNamesList = Object.values(MENU_SECTION_NAMES).map(
    (SECTION) => SECTION.NAME
  );

  const isMobileModeOpen = useSelector(getIsMobileMode);
  const isMobileMenuOpen = useSelector(getIsMobileMenu);
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  return (
    <>
      {isMobileModeOpen ? (
        <div className="mobile-menu">
          {!isMobileMenuOpen ? (
            <button
              onClick={() => dispatch(setIsMobileMenu(true))}
              className="mobile-menu-toggle"
              aria-label="Open menu"
            >
              <div className="dehaze-menu1" />
              <div className="dehaze-menu2" />
            </button>
          ) : (
            <div className="mobile-menu-list">
              {menuNamesList.map((sectionName, key) => (
                <div key={key}>
                  <MenuButton buttonName={sectionName} />
                </div>
              ))}
              <button
                className="theme-toggle-mobile"
                onClick={() => dispatch(toggleTheme())}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="menu-list">
          {menuNamesList.map((sectionName, key) => (
            <div key={key}>
              <MenuButton buttonName={sectionName} />
            </div>
          ))}
          <button
            className="theme-toggle"
            onClick={() => dispatch(toggleTheme())}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      )}
    </>
  );
}

export default MenuList;
