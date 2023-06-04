import { configureStore } from '@reduxjs/toolkit';
import airplanesSlice from './airplanes/airplanesSlice';

export const store = configureStore(({
    reducer: {
        airplanes: airplanesSlice 
    }
}));