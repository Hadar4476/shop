import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./slices/products";
import cartSlice from "./slices/cart";

import createSagaMiddleware from "redux-saga";
import { watchInitProducts } from "./sagas";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: [saga],
});

saga.run(watchInitProducts);

export const globalActions = {
  products: productsSlice.actions,
  cart: cartSlice.actions,
};

export default store;
