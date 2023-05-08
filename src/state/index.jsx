import { createSlice } from "@reduxjs/toolkit";

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const initialState = {
  mode: prefersDarkMode ? "dark" : "light",
  userId: "63701cc1f03239b7f700000e",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
