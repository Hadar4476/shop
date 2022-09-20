import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shouldDisplay: false,
};

const showCart = (state) => {
  state.shouldDisplay = true;
};

const hideCart = (state) => {
  state.shouldDisplay = false;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart,
    hideCart,
  },
});

export default cartSlice;
