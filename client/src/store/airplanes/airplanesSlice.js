import { createSlice } from "@reduxjs/toolkit";

const airplanesSlice = createSlice({
    name: 'planes',
    initialState: {
        airplanes: null,
        isError: false,
        isLoading: false,
        message: ''
    }
});

export default airplanesSlice.reducer;