import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./slices/products";

import createSagaMiddleware from "redux-saga";
import { watchInitProducts } from "./sagas";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
  middleware: [saga],
});

saga.run(watchInitProducts);

export const globalActions = {
  products: productsSlice.actions,
};

export default store;
