import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {
    showAlert: (state, action) => {
      state.value = action.payload
    },
    hideAlert: (state) => {
        state.value.show = false;
    }
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;

export const selectAlert = (state) => state.alert.value;

export default alertSlice.reducer;
