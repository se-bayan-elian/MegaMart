import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
  'categoriesSlice/fetchCategories',
  async (apiUrl) => {
    let data = {}
    await axios.get(apiUrl)
      .then(res => {
        console.log(res)
        data = res.data.categories
      })
    return data;
  }
)
const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState: [],
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export default categoriesSlice.reducer