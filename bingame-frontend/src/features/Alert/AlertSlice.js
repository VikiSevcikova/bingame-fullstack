import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    type: '',
    mesage: '',
    show: false
  }
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    showAlert: (state, action) => {
      state.value = action.payload
    },
    hideAlert: (state) => {
        state.value = initialState;
    }
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;

export const selectAlert = (state) => state.alert.value;

export default alertSlice.reducer;
