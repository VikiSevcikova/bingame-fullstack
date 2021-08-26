import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, isAuth } from '../../utils/utils';

const initialState = {
  value: {
    data: getCurrentUser(),
    loggedIn: isAuth()
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //set the data of the user value based on the data from the local storage
    logIn: (state) => {
      state.value.data = getCurrentUser();
      state.value.loggedIn = isAuth();
    },
    //when the logout reducer is called set data and and loggedIn to null
    logOut: (state) => {
      state.value.data = null;
      state.value.loggedIn = null;
    }
  },
});

export const { logIn, logOut } = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
