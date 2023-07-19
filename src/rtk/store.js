import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './slices/categoriesSlice';
import productsSlice from './slices/productsSlice';
import CartSlice from './slices/CartSlice';
import Themes from './slices/Themes';
const store = configureStore({ reducer: {
 categories :  categoriesSlice,
 products : productsSlice,
 cart : CartSlice,
 themes : Themes
} })

export default store
