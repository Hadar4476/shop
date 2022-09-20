import { takeLatest } from "redux-saga/effects";

import { initProductsSaga } from "./products";

export function* watchInitProducts() {
  yield takeLatest("products/initProducts", initProductsSaga);
}
