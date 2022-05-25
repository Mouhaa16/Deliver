import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../slices/user";
import packageReducer from "../../slices/package";
export const store = configureStore({
  reducer: {
    users: userReducer,
    package: packageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
