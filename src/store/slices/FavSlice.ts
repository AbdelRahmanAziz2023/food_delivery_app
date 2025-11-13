import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Product.type';

interface FavState {
  favorites: Product[];
}

const initialState: FavState = {
  favorites: [],
};

const FavSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const existing = state.favorites.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        // Remove from favorites
        state.favorites = state.favorites.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        // Add to favorites
        state.favorites.push(action.payload);
      }
    },

    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },

    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { toggleFavorite, removeFavorite, clearFavorites } =
  FavSlice.actions;

export default FavSlice.reducer;
