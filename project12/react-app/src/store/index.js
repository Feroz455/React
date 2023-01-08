import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth";
import counterSlice from "./Counter";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
