import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    increment: (state, payload) => {
      state.value = [...state.value, payload];

      localStorage.setItem('favoriteIds', JSON.stringify(state.value));
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = dishesSlice.actions;

export default dishesSlice.reducer;
