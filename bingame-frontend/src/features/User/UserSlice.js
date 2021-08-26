import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrentUser } from '../../utils/utils';

const initialState = {
  value: {
    data: getCurrentUser(),
    loggedIn: localStorage.getItem("authToken")
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    logIn: (state) => {
      state.value.data = getCurrentUser();
      state.value.loggedIn = localStorage.getItem("authToken");
    },
    logOut: (state) => {
        state = initialState;
    }
  },
});

export const { logIn, logOut } = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
