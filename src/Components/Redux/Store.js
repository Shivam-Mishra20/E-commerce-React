
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../Redux/Product';
import cartReducer from '../Redux/Cartslice'
import darkModeReducer from '../Redux/darkModeSlice';
 

 

const store = configureStore({
  reducer: {
    // other reducers...
    products: productsReducer,
    cart: cartReducer,
    darkMode:darkModeReducer,
   
  },
 
});

 
export default store;