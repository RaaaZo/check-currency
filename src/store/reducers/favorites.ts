import { CurrencyInterface, GetCurrencyByCode } from 'types';

import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesInitialStateInterface {
  favorites: CurrencyInterface[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: FavoritesInitialStateInterface = {
  favorites: [],
  status: 'idle',
  error: null,
};

export const fetchCurrencyByCode = createAsyncThunk(
  'currencies/fetchCurrencyByCode',
  async (providedCode: string) => {
    const {
      data: { currency, code, rates },
    } = await axios.get<GetCurrencyByCode>(
      `${process.env.REACT_APP_NBP_API}/rates/a/${providedCode}?format=json`
    );

    return {
      currency,
      code,
      mid: rates[0].mid,
    };
  }
);

const favorites = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<CurrencyInterface>) => {
      const isFavorite = state.favorites.find(
        (item) => item.code === action.payload.code
      );
      if (!isFavorite) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const favorites = state.favorites.filter(
        (item) => item.code !== action.payload
      );
      state.favorites = favorites;
    },
    removeAllFromFavorites: (state) => {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencyByCode.fulfilled, (state, { payload }) => {
      const isFavorite = state.favorites.find(
        (item) => item.code === payload.code
      );

      if (isFavorite) {
        state.status = 'failed';
        state.error = 'Posiadasz już tą walutę w ulubionych.';
      } else {
        state.status = 'succeeded';
        state.favorites.push(payload);
      }
    });
    builder.addCase(fetchCurrencyByCode.rejected, (state, action) => {
      state.status = 'failed';
      state.error = 'Dodanie do ulubionych nie powiodło się, spróbuj ponownie';
    });
  },
});

export const { addToFavorites, removeFromFavorites, removeAllFromFavorites } =
  favorites.actions;

export default favorites.reducer;
