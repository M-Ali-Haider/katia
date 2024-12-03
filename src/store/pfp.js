import { createSlice } from "@reduxjs/toolkit";

const pfpSlice = createSlice({
  name: "pfp",
  initialState: {
    profile_picture: "/userPlaceholder.jpg",
  },
  reducers: {
    setPfp: (state, action) => {
      state.profile_picture = action.payload;
      localStorage.setItem("profile_picture", action.payload);
    },
    loadFromLocalStorage: (state) => {
      const pfp = localStorage.getItem("profile_picture");
      state.profile_picture =
        pfp && pfp !== "null" ? pfp : "/userPlaceholder.jpg";
    },
  },
});

export const { setPfp, loadFromLocalStorage } = pfpSlice.actions;
export default pfpSlice.reducer;
