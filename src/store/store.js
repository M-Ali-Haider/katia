import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar";
import deleteConvoSlicer from "./modal/deleteConversation";
import chatReducer from "./chatMessages";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    deleteConvoModal: deleteConvoSlicer,
    chat: chatReducer,
  },
});

export default store;
