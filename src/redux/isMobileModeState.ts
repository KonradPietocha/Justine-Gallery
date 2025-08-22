import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

const initialState = false;

export const isMobileMode = createSlice({
  name: 'isMobileModeState',
  initialState,
  reducers: {
    setIsMobileMode: (state, action: PayloadAction<boolean>) => {
      return (state = action?.payload ?? false);
    },
  },
});

export const { setIsMobileMode } = isMobileMode.actions;
export const getIsMobileMode = (state: RootState) => state.isMobileModeState;
export default isMobileMode.reducer;
