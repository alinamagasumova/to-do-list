import { configureStore } from "@reduxjs/toolkit";
import reducer  from "./reducer";

export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>
export default store;