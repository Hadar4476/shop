import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "./store";
import { Transition } from "react-transition-group";

import TheHeader from "./components/TheHeader/TheHeader";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Backdrop from "./components/UI/Backdrop/Backdrop";

import "./App.css";

const App = () => {
  const { items, shouldDisplay } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalActions.products.initProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(globalActions.cart.initCart());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const onCloseCart = () => {
    dispatch(globalActions.cart.hideCart());
  };

  return (
    <div className="App">
      <TheHeader />
      <main>
        <Products />
        <Transition
          in={shouldDisplay}
          timeout={400}
          mountOnEnter
          unmountOnExit
          children={(state) => (
            <Fragment>
              <Cart displayState={state} />
              <Backdrop displayState={state} emitClose={onCloseCart} />
            </Fragment>
          )}
        />
      </main>
    </div>
  );
};

export default App;
