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
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.type = action.payload.type;
      state.value.message = action.payload.message;
      state.value.show = true;
    },
    hideAlert: (state) => {
        state = initialState;
    }
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;

export const selectAlert = (state) => state.value;

export default alertSlice.reducer;
