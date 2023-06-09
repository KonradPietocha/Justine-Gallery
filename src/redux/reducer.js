import { combineReducers } from 'redux';
import { MENU_SECTION_NAMES } from './constant';

const isMobileMenuOpen = (state, action) => {
    if (state === undefined) {
        return false;
    }
    switch (action.type) {
        case "haze":
            return false;
        case "dehaze":
            return true;
        default:
            return state;
    }
};

const enlargedPicture = (state, action) => {
    if (state === undefined) {
        return null;
    };
    switch (action.type) {
        case "enlarge":
            return action.url;
        case "shut":
            return null;
        default:
            return state;
    }
};

const pictureIndex = (state, action) => {
    if (state === undefined) {
        return 0;
    };
    switch (action.type) {
        case "prev":
            return state === 0 ? action.last : state - 1;
        case "next":
            return state === action.last ? 0 : state + 1;
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
        case "wide":
            return false;
        case "small":
            return true;
        default:
            return state;
    }
};

export default combineReducers({
    menuSection,
    isMobileModeOpen,
    isMobileMenuOpen,
    pictureIndex,
    enlargedPicture
});
