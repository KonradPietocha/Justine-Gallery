import { configureStore } from '@reduxjs/toolkit';
import isMobileModeStateReducer from './isMobileModeState';
import menuSectionStateReducer from './menuSectionState';
import isMobileMenuStateReducer from './isMobileMenuState';

export const store = configureStore({
  reducer: {
    isMobileModeState: isMobileModeStateReducer,
    isMobileMenuState: isMobileMenuStateReducer,
    menuSectionState: menuSectionStateReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
