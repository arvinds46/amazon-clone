import { createSlice } from "@reduxjs/toolkit";

let initialState = { items: [], count: 0 };

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addNewProductToCart: (state, action) => {
      let newItem = action.payload;
      newItem.price = Math.floor(newItem.price * 79.67);
      newItem.quantity = newItem.quantity;
      state.items.push(newItem);
      state.count += parseInt(action.payload.quantity);
    },
    addExistingProductToCart: (state, action) => {
      console.log(action.payload)
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += parseInt(action.payload.quantity);
        state.count += parseInt(action.payload.quantity);
      }
    },
    updateProduct: (state, action) => {
      const itemToUpdate = state.items.find(item => item.id === action.payload.id);
      if (itemToUpdate) {
        const newQuantity = parseInt(itemToUpdate.quantity) - parseInt(action.payload.quantity);
        itemToUpdate.quantity = parseInt(action.payload.quantity);
        state.count -= parseInt(newQuantity);
      }
    },
    setCartFromLocalStorage: (state, action) => {
      return action.payload;
    },
    removeProductFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.count -= parseInt(action.payload.quantity);
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: state => {
      state.items = [];
      state.count = 0;
    }
  }
});

export const {
  addNewProductToCart,
  addExistingProductToCart,
  updateProduct,
  setCartFromLocalStorage,
  removeProductFromCart,
  clearCart
} = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
