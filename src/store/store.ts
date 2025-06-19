import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "../slice/nameSlice"
import addressReducer from "../slice/addressSlice"
export const store = configureStore({
    reducer:{
        nameEmail: nameReducer,
        address: addressReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch