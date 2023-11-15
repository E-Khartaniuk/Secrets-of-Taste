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

const handlePanding = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = error ? error.message : payload;
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    filter: (state, action) => {
      if (action.payload === '') {
        return { ...state, filter: '' };
      }
      return {
        ...state,
        filter: action.payload.toLowerCase(),
      };
    },
  },
  extraReducers: builder =>
    builder
      // ------ FETCH Contats
      .addCase(getFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorite = action.payload;
      })
      // ------ POST Contats
      .addCase(postFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorite = [...state.favorite, action.payload];
      })
      //// ---------- PUT Contacts
      .addCase(deleteFavoriteThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorite = state.favorite.filter(
          dish => dish.id !== action.payload
        );
      })
      //////---------PATCH Contacts
      // .addCase(changeContactThunk.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   // state.contacts.items = action.payload;
      // })
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePanding)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected),
});

export const favoriteReducer = favoriteSlice.reducer;
export const { filter, editContact } = phoneBookSlice.actions;

const store = configureStore({
  reducer: rootReducer,
});
