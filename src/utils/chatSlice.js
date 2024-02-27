import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChatMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addChatMessage } = chatSlice.actions;
export default chatSlice.reducer;
