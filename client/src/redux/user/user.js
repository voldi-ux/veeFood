import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      // login the user
      state.user = action.payload
    },
    logout: (state, action) => {
      // logout the user
    },
    addOrder: (state, action) => {
      // add orders to the dashboard
    },
    removeOrder: (state, action) => {
       //remove the completed orders from the dashboard
    },
  },
});

export const { login,logout,addOrder, removeOrder } = userSlice.actions;

export default userSlice.reducer;
