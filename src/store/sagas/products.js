import { put, all } from "redux-saga/effects";
import axios from "../../my-axios";

import productsSlice from "../slices/products";

export function* initProductsSaga() {
  try {
    const { data } = yield axios.get("/products");
    const products = data;
    const mappedProducts = products.map((p) => {
      const { id, title, description, image, price } = p;

      return {
        id,
        title,
        description,
        image,
        price,
      };
    });

    yield all([
      yield put(productsSlice.actions.initProductsSuccess(mappedProducts)),
    ]);
  } catch (error) {
    yield put(productsSlice.actions.initProductsFail(error));
  }
}
