import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    products: [],
    totalPrice: 0
  },
  reducers: {
    addToCart: (state, action) => {
      let index = state.products.findIndex((el) => el.product.id === action.payload.id);
      if (index === -1) {
        state.products.push({ product: action.payload, price: action.payload.price, quantity: 1 })
        state.totalPrice += action.payload.price
      } else {
        state.products[index].quantity = state.products[index].quantity + 1
        state.products[index].price = state.products[index].quantity * action.payload.price;
        state.totalPrice += state.products[index].product.price;
      }

    },
    editTotal: (state, action) => {
      state.totalPrice = state.totalPrice + action.payload
    },
    removeFromCart: (state, action) => {
      let index = state.products.findIndex((el) => el.product.id === action.payload.id);
      state.totalPrice -= state.products[index].price ; 
      state.products.splice(index, 1)
    },
    calculateElementPrice: (state, action) => {
      let index = state.products.findIndex((el) => el.product.id === action.payload.id);
      state.products[index].quantity = action.payload.quantity
      state.products[index].price = state.products[index].quantity * state.products[index].product.price;
    },
    clearCart: (state ,action) => {
      return {
        products : [],
        totalPrice : 0
      };
    }


  }
})

export const { addToCart, removeFromCart, calculateElementPrice, editTotal,clearCart } = cartSlice.actions;
export default cartSlice.reducer;