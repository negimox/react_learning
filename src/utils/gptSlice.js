import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptResult: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptResult: (state, action) => {
      const { gptResults, movieNames } = action.payload;
      state.gptResult = gptResults;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGptResult } = gptSlice.actions;

export default gptSlice.reducer;
