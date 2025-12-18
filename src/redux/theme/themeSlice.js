import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: 'light'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', state.mode);
    },
    setTheme: (state, { payload }) => {
      state.mode = payload;
      localStorage.setItem('themeMode', state.mode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export const selectThemeMode = state => state.theme.mode;

export const themeReducer = themeSlice.reducer;