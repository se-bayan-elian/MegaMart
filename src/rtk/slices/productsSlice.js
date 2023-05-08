import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('productsSlice/fetchProducts',
  async () => {
    const response = await fetch('https://dummyjson.com/products?limit=100');
    const data = await response.json();
    return data.products;
  })

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState: [],
  reducers : {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})
export default productsSlice.reducer