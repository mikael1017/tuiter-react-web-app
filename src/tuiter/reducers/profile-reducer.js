import { createSlice } from "@reduxjs/toolkit";
import profileArray from "../profile/profile.json";

const profileSlice = createSlice({
  name: "profile",
  initialState: profileArray,
});

export default profileSlice.reducer;
