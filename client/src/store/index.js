import { configureStore } from "@reduxjs/toolkit";
import airplanesSlice from "./airplanes/airplanesSlice";
import airplaneSlice from "./airplane/airplaneSlice";

export const store = configureStore(({
    reducer: {
        airplanes: airplanesSlice,
        airplane: airplaneSlice
    }
}));