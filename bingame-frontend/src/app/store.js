import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import alertReducer from '../features/Alert/AlertSlice';
import userReducer from '../features/User/UserSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    alert: alertReducer,
    user: userReducer
  },
});
