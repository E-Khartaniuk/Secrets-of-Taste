import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';

const initialState = {
  contacts: {
    FavotiteItems: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const store = configureStore({
  reducer: rootReducer,
});
