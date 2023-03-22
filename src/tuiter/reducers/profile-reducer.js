import { createSlice } from "@reduxjs/toolkit";
import profileArray from "../profile/profile.json";

const profileSlice = createSlice({
  name: "profile",
  initialState: profileArray,
  reducers: {
    updateProfile(state, action) {
      state.name = action.payload.name;
      state.bio = action.payload.bio;
      state.location = action.payload.location;
      state.website = action.payload.website;
      state.dateOfBirth = action.payload.dateOfBirth;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
