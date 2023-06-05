import { configureStore } from "@reduxjs/toolkit";
import airplanesSlice from "./airplanes/airplanesSlice";
// import planesReducer from './airplanes/planesSlice'
export const store = configureStore(({
    reducer: {
        airplanes: airplanesSlice,
    }
}))