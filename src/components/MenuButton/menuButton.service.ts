import { MENU_SECTION_NAMES } from "../../redux/constant";

export const switchMenu = (item: string) => {
    switch (item) {
        case MENU_SECTION_NAMES.GALLERY.NAME:
            return MENU_SECTION_NAMES.GALLERY.ACTION;
        case MENU_SECTION_NAMES.SLIDES.NAME:
            return MENU_SECTION_NAMES.SLIDES.ACTION;
        case MENU_SECTION_NAMES.ABOUT_AUTHOR.NAME:
            return MENU_SECTION_NAMES.ABOUT_AUTHOR.ACTION;
        case MENU_SECTION_NAMES.CONTACT.NAME:
            return MENU_SECTION_NAMES.CONTACT.ACTION;
        default:
            return MENU_SECTION_NAMES.GALLERY.ACTION;
    };
};
