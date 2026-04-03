import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

const initialState = false;

export const isMobileMenu = createSlice({
  name: 'isMobileMenuState',
  initialState,
  reducers: {
    setIsMobileMenu: (_state, action: PayloadAction<boolean>) => {
      return action?.payload ?? false;
    },
  },
});

export const { setIsMobileMenu } = isMobileMenu.actions;
export const getIsMobileMenu = (state: RootState) => state.isMobileMenuState;
export default isMobileMenu.reducer;
