import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: "",
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = true;
      state.authToken = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.authToken = null;
    },
  },
});

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;
