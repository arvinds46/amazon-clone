import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    }
  }
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
