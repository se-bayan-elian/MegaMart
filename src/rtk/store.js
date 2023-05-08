import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './slices/categoriesSlice';
import productsSlice from './slices/productsSlice';
import CartSlice from './slices/CartSlice';
const store = configureStore({ reducer: {
 categories :  categoriesSlice,
 products : productsSlice,
 cart : CartSlice
} })

export default store
