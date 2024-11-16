import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar";
import deleteConvoSlicer from "./modal/deleteConversation";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    deleteConvoModal: deleteConvoSlicer,
  },
});

export default store;
