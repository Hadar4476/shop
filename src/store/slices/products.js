import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const initProducts = (state) => {
  state.isLoading = true;
};

const initProductsSuccess = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};

const initProductsFail = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initProducts,
    initProductsSuccess,
    initProductsFail,
  },
});

export default productsSlice;
