import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type Theme = 'light' | 'dark';

const initialState = 'light' as Theme;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (_state, action: PayloadAction<Theme>) => {
      return action.payload;
    },
    toggleTheme: (state) => {
      return state === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export const getTheme = (state: RootState) => state.theme;
export default themeSlice.reducer;