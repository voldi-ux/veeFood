import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const appDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // add item to appData. it should add a new item to the appData else remove if the item is already in the appData
    },
  },
});

export const { addItem } = appDataSlice.actions;

export default appDataSlice.reducer;
