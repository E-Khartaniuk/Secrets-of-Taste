import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: [],
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const existingIndex = state.favoriteItems.findIndex(
        item => item.id === action.payload.id
      );

      if (existingIndex !== -1) {
        state.favoriteItems.splice(existingIndex, 1);
      } else {
        state.favoriteItems.push(action.payload);
      }

      localStorage.setItem(
        'favoriteItems',
        JSON.stringify(state.favoriteItems)
      );
    },
  },
});

export const { toggleFavorite } = dishesSlice.actions;

export default dishesSlice.reducer;
