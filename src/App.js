import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "./store";

import TheHeader from "./components/TheHeader/TheHeader";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Backdrop from "./components/UI/Backdrop/Backdrop";

import "./App.css";

const App = () => {
  const { shouldDisplay } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalActions.products.initProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(globalActions.cart.initCart());
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const onCloseCart = () => {
    dispatch(globalActions.cart.hideCart());
  };

  const cartRenderer = shouldDisplay && (
    <Fragment>
      <Cart />
      <Backdrop emitClose={onCloseCart} />
    </Fragment>
  );

  return (
    <div>
      <TheHeader />
      <main>
        <Products />
        {cartRenderer}
      </main>
    </div>
  );
};

export default App;
