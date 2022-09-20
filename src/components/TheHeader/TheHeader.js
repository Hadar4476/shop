import React from "react";
import { useDispatch } from "react-redux";
import { globalActions } from "../../store";

import classes from "./TheHeader.module.scss";

const { cart: actions } = globalActions;

const TheHeader = () => {
  const dispatch = useDispatch();

  const onOpenCart = () => {
    dispatch(actions.showCart());
  };

  return (
    <header className={classes["header-wrapper"]}>
      <div
        className={`${classes.header} d-flex align-items-center justify-content-between`}
      >
        <span className={classes.title}>Shop</span>
        <nav>
          <div
            className={`${classes["cart-toggler"]} d-flex align-items-center`}
            onClick={onOpenCart}
          >
            <span className={classes.text}>Cart</span>
            <i className={`${classes.icon} fa fa-cart-shopping`}></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TheHeader;
