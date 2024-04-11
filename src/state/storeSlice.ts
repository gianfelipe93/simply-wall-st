import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SearchResult from "../types/SearchResult";
import { getStocks } from "../api/sws";
import OrderBy from "../types/OrderBy";

type SearchFilterProps = {
  countryFilter: string,
  orderBy: OrderBy,
  page: number
}

const initialState: SearchResult = {
  data: [],
  meta: {
    total_records: 0,
    real_total_records: 0,
    state: 'read',
    noResultIfLimit: false,
    pe: 0,
    return_1yr_abs: 0,
    return_7d: 0
  },
  loading: false
}

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers(builder) {
    builder.addCase(getStocksAsync.fulfilled, (state, action: PayloadAction<SearchResult>) => {
      state.data = [...state.data, ...action.payload.data]
      state.meta = action.payload.meta
      state.loading = false
    }).addCase(getStocksAsync.pending, (state) => {
      state.loading = true
    }).addCase(getStocksAsync.rejected, (state) => {
      state.loading = false
    })
  },
})

export const getStocksAsync = createAsyncThunk('stock/getStocks', async (params: SearchFilterProps) => {
  const { countryFilter, orderBy, page } = params

  return getStocks(countryFilter, orderBy, page)
})

export const { reset } = stockSlice.actions;

export default stockSlice.reducer;