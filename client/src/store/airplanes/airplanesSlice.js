import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import airplanesService from '../services/airplanesService';

export const getAirplanes = createAsyncThunk('GET_AIRPLANES', async (_, thunkAPI) => {
  try {
    return await airplanesService.getAirplanes();
  } catch(error) {
     return thunkAPI.rejectWithValue(error.response.data)
  }
});

const airplanesSlice = createSlice({
  name: 'planes',
  initialState: {
    airplanes: null,
    isError: false,
    isLoading: false,
    message: ''
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAirplanes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAirplanes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.airplanes = action.payload;
      })
      .addCase(getAirplanes.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.airplanes = null;
      })
  }
});

export default airplanesSlice.reducer;