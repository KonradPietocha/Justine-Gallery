import { configureStore } from '@reduxjs/toolkit';
import isMobileModeStateReducer from './isMobileModeState';
import menuSectionStateReducer from './menuSectionState';
import isMobileMenuStateReducer from './isMobileMenuState';
import themeReducer from './themeState';

export const store = configureStore({
  reducer: {
    isMobileModeState: isMobileModeStateReducer,
    isMobileMenuState: isMobileMenuStateReducer,
    menuSectionState: menuSectionStateReducer,
    theme: themeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
