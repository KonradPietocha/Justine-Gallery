import { combineReducers } from 'redux';
import { MENU_SECTION_NAMES, MOBILE_MENU, MOBILE_MODE } from './constant';

const isMobileMenuOpen = (state, action) => {
    if (state === undefined) {
        return false;
    }
    switch (action.type) {
        case MOBILE_MENU.CLOSE:
            return false;
        case MOBILE_MENU.OPEN:
            return true;
        default:
            return state;
    }
};

const menuSection = (state, action) => {
    if (state === undefined) {
        return MENU_SECTION_NAMES.GALLERY.NAME;
    }
    switch (action.type) {
        case MENU_SECTION_NAMES.GALLERY.ACTION:
            return MENU_SECTION_NAMES.GALLERY.NAME;
        case MENU_SECTION_NAMES.SLIDES.ACTION:
            return MENU_SECTION_NAMES.SLIDES.NAME;
        case MENU_SECTION_NAMES.ABOUT_AUTHOR.ACTION:
            return MENU_SECTION_NAMES.ABOUT_AUTHOR.NAME;
        case MENU_SECTION_NAMES.CONTACT.ACTION:
            return MENU_SECTION_NAMES.CONTACT.NAME;
        default:
            return state;
    }
};

const isMobileModeOpen = (state, action) => {
    if (state === undefined) {
        return true;
    }
    switch (action.type) {
        case MOBILE_MODE.CLOSE:
            return false;
        case MOBILE_MODE.OPEN:
            return true;
        default:
            return state;
    }
};

export default combineReducers({
    menuSection,
    isMobileModeOpen,
    isMobileMenuOpen
});
