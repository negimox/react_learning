import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    mainVideo: null,
    infoShow: false,
    infoItem: null,
    accent: "#E50914",
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    addMainVideo: (state, action) => {
      state.mainVideo = action.payload;
    },
    changeInfoShow: (state) => {
      state.infoShow = !state.infoShow;
    },
    addInfoItem: (state, action) => {
      state.infoItem = action.payload;
    },
    changeAccent: (state, action) => {
      state.accent = action.payload;
    },
  },
});

export const {
  changeLang,
  addMainVideo,
  changeInfoShow,
  addInfoItem,
  changeAccent,
} = configSlice.actions;
export default configSlice.reducer;
