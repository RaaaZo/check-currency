import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { CurrencyInterface, GetCurrenciesInterface } from 'types';

interface CurrenciesInitialStateInterface {
  currencies: CurrencyInterface[];
  effectiveDate: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CurrenciesInitialStateInterface = {
  currencies: [],
  effectiveDate: '',
  status: 'idle',
  error: null,
};

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchCurrencies',
  async () => {
    const response = await axios.get<GetCurrenciesInterface[]>(
      `${process.env.REACT_APP_NBP_API}/tables/c?format=json`
    );
    return response.data[0];
  }
);

const currencies = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCurrencies.fulfilled, (state, { payload }) => {
      state.status = 'succeeded';
      state.currencies = payload.rates;
      state.effectiveDate = payload.effectiveDate;
    });
    builder.addCase(fetchCurrencies.rejected, (state, action) => {
      state.status = 'failed';
    });
  },
});

export const {} = currencies.actions;
export default currencies.reducer;
