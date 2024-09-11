import { configureStore } from "@reduxjs/toolkit";
import keySlice from "../../components/Key/model/slice/keySlice";

export const store = configureStore({
    reducer: {
        key: keySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
