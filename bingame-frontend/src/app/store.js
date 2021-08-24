import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import alertReducer from '../features/Alert/AlertSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    alert: alertReducer
  },
});
