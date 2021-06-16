import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from 'store/reducers/currencies';
import favoritesReducer from 'store/reducers/favorites';

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
