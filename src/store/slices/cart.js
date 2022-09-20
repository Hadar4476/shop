import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shouldDisplay: false,
  items: [],
};

const showCart = (state) => {
  state.shouldDisplay = true;
};

const hideCart = (state) => {
  state.shouldDisplay = false;
};

const increaseQuantity = (state, action) => {
  const product = action.payload;
  const productInCart = state.items.findIndex((i) => i.id === product.id);

  if (productInCart < 0) {
    product.quantity = 1;
    state.items.push(product);
  } else {
    state.items[productInCart].quantity++;
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart,
    hideCart,
    increaseQuantity,
  },
});

export default cartSlice;
