import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    settingsIsOpen: false,
    showQuotes: true,
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
  },
});

export const {
  openSettings,
  closeSettings,
  openQuotes,
  closeQuotes,
} = settingsSlice.actions;

export const selectSettingsIsOpen = (state) => state.settings.settingsIsOpen;

export const selectShowQuotes = (state) => state.settings.showQuotes;

export default settingsSlice.reducer;
