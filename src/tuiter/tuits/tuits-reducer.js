import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";
import {
  updateTuitThunk,
  createTuitThunk,
  deleteTuitThunk,
  findTuitsThunk,
} from "../../services/tuits-thunk";

const initialState = {
  tuits: [],
  loading: false,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push(payload);
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(state.tuits);
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload);
      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...payload,
      };
    },
  },
  reducers: {},
});

export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
