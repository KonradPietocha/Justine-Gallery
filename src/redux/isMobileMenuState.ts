import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

const initialState = false;

export const isMobileMenu = createSlice({
  name: 'isMobileMenuState',
  initialState,
  reducers: {
    setIsMobileMenu: (state, action: PayloadAction<boolean>) => {
      return (state = action?.payload ?? false);
    },
  },
});

export const { setIsMobileMenu } = isMobileMenu.actions;
export const getIsMobileMenu = (state: RootState) => state.isMobileMenuState;
export default isMobileMenu.reducer;
