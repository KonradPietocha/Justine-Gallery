import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { MENU_SECTION_NAMES } from './constant';
import type { RootState } from './store';

const initialState = MENU_SECTION_NAMES.GALLERY.NAME;

const getMenuSectionName = (payload: string) => {
  switch (payload) {
    case MENU_SECTION_NAMES.GALLERY.ACTION:
      return MENU_SECTION_NAMES.GALLERY.NAME;
    case MENU_SECTION_NAMES.SLIDES.ACTION:
      return MENU_SECTION_NAMES.SLIDES.NAME;
    case MENU_SECTION_NAMES.ABOUT_AUTHOR.ACTION:
      return MENU_SECTION_NAMES.ABOUT_AUTHOR.NAME;
    case MENU_SECTION_NAMES.CONTACT.ACTION:
      return MENU_SECTION_NAMES.CONTACT.NAME;
    default:
      return MENU_SECTION_NAMES.GALLERY.NAME;
  }
};

export const menuSection = createSlice({
  name: 'menuSectionState',
  initialState,
  reducers: {
    setMenuSection: (state, action: PayloadAction<string>) => {
      return (state = getMenuSectionName(action?.payload));
    },
  },
});

export const { setMenuSection } = menuSection.actions;
export const getMenuSection = (state: RootState) => state.menuSectionState;
export default menuSection.reducer;
