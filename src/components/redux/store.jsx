import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
import counterReducer from './dishesSlice';

export const store = configureStore({
  reducer: {
    dishes: counterReducer,
  },
});
