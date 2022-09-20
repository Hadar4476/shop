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

const decreaseQuantity = (state, action) => {
  const productId = action.payload;
  const productInCart = state.items.findIndex((i) => i.id === productId);
  state.items[productInCart].quantity--;

  if (!state.items[productInCart].quantity) {
    state.items.splice(productInCart, 1);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart,
    hideCart,
    increaseQuantity,
    decreaseQuantity,
  },
});

export default cartSlice;
