// cartslice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newitems = action.payload//we pass any data then data auto come in action.payload
       

        state.cartItems = [...state.cartItems, newitems];
        state.cartCount = state.cartItems.length;

      

    },
    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      state.cartItems = state.cartItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity, price: newQuantity * item.price } : item
      );
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== productId);
      state.cartCount = state.cartItems.length;
    },
    clearCart: state => {
      state.cartItems = [];
      state.cartCount = 0;
    },
    loadCartFromLocalStorage: (state, action) => {
      state.cartItems = action.payload;
      state.cartCount = action.payload.length;
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart, loadCartFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;
