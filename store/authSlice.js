import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      AsyncStorage.setItem("token", state.authToken);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.authToken = null;
      AsyncStorage.removeItem("token");
    },
  },
});

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;
