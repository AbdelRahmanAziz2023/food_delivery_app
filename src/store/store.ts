import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slices/AuthSlice';
import CartReducer from './slices/CartSlice';
import FavReducer from './slices/FavSlice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    cart: CartReducer,
    favorites: FavReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
