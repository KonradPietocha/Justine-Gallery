import { useDispatch, useSelector } from "react-redux";
import { MENU_SECTION_NAMES } from "../../redux/constant";
import MenuButton from "../MenuButton/MenuButton.js";
import { getIsMobileMode } from "../../redux/isMobileModeState.js";
import {
  getIsMobileMenu,
  setIsMobileMenu,
} from "../../redux/isMobileMenuState.js";
import "./MenuList.css";

function MenuList() {
  const menuNamesList = Object.values(MENU_SECTION_NAMES).map(
    (SECTION) => SECTION.NAME
  );

  const isMobileModeOpen = useSelector(getIsMobileMode);
  const isMobileMenuOpen = useSelector(getIsMobileMenu);
  const dispatch = useDispatch();

  return (
    <>
      {isMobileModeOpen ? (
        <div className="mobile-menu">
          {!isMobileMenuOpen ? (
            <div onClick={() => dispatch(setIsMobileMenu(true))}>
              <div className="dehaze-menu1" />
              <div className="dehaze-menu2" />
            </div>
          ) : (
            <div className="mobile-menu-list">
              {menuNamesList.map((sectionName, key) => (
                <div key={key}>
                  <MenuButton buttonName={sectionName} />
                </div>
              ))}
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
        </div>
      )}
    </>
  );
}

export default MenuList;
