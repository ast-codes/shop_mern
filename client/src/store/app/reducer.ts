import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../types/app';

const initialState: AppState = {
  isOpenDrawer: false,
  theme: 'light',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleDrawer(state) {
      state.isOpenDrawer = state.isOpenDrawer ? false : true;
    },
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const isOpenDrawer = (state: AppState) => state.isOpenDrawer;
export const getCurrentTheme = (state: AppState) => state.theme;

export const appActions = appSlice.actions;
