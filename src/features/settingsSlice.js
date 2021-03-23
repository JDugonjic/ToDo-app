import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    settingsIsOpen: false,
    showQuotes: true,
    darkMode: false,
  },
  reducers: {
    openSettings: (state) => {
      state.settingsIsOpen = true;
    },

    closeSettings: (state) => {
      state.settingsIsOpen = false;
    },
    closeQuotes: (state) => {
      state.showQuotes = false;
    },

    openQuotes: (state) => {
      state.showQuotes = true;
    },
    lightMode: (state) => {
      state.darkMode = false;
    },

    darkMode: (state) => {
      state.darkMode = true;
    },
  },
});

export const {
  openSettings,
  closeSettings,
  openQuotes,
  closeQuotes,
  lightMode,
  darkMode,
} = settingsSlice.actions;

export const selectSettingsIsOpen = (state) => state.settings.settingsIsOpen;

export const selectShowQuotes = (state) => state.settings.showQuotes;

export const selectDarkMode = (state) => state.settings.darkMode;

export default settingsSlice.reducer;
