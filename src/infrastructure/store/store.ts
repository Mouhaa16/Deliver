import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../slices/user";
import packageReducer from "../../slices/package";
import addressReducer from "../../slices/address";
export const store = configureStore({
  reducer: {
    users: userReducer,
    package: packageReducer,
    address: addressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
