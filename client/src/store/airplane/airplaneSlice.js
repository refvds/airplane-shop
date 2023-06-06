import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import airplanesService from '../services/airplanesService';

export const getAirplane = createAsyncThunk('GET_AIRPLANE', async (id, thunkAPI) => {
  try {
    return await airplanesService.getAirplane(id);
  } catch(error) {
     return thunkAPI.rejectWithValue(error.response.data)
  }
});

export const createAirplane = createAsyncThunk('CREATE_AIRPLANE', async (airplane, thunkAPI) => {
  try {
    return await airplanesService.postAirplane(airplane);
  } catch(error) {
     return thunkAPI.rejectWithValue(error.response.data)
  }
});

const airplaneSlice = createSlice({
  name: 'airplane',
  initialState: {
    airplane: null,
    isError: false,
    isLoading: false,
    message: '',
    errors: null
  },
  reducers: {
    resetForm: (state) => {
       state.errors = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAirplane.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAirplane.fulfilled, (state, action) => {
        state.isLoading = false;
        state.airplane = action.payload;
      })
      .addCase(getAirplane.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.airplane = null;
      })
      .addCase(createAirplane.pending, (state) => {
        state.isLoading = true;
        state.errors = null
      })
      .addCase(createAirplane.fulfilled, (state) => {
        state.isLoading = false;
        state.errors = null
      })
      .addCase(createAirplane.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.errors = action.payload;
      });
  }
});

export const { resetForm } = airplaneSlice.actions;
export default airplaneSlice.reducer;