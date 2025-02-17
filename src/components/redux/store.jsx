import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './dishesSlice';

export const store = configureStore({
  reducer: {
    dishes: counterReducer,
  },
});
