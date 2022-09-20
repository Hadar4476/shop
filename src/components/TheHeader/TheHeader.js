import React from "react";
import useWindow from "../../hooks/use-window";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../store";

import classes from "./TheHeader.module.scss";

const { cart: actions } = globalActions;

const TheHeader = () => {
  const { items } = useSelector((state) => state.cart);
  const { isMobile } = useWindow();
  const dispatch = useDispatch();

  const totalAmount = items.reduce((acc, i) => acc + i.quantity, 0);

  const onOpenCart = () => {
    dispatch(actions.showCart());
  };

  const textRenderer = !isMobile && <span className={classes.text}>Cart</span>;
  const badgeRenderer = totalAmount ? (
    <span
      className={`${classes.badge} d-flex align-items-center justify-content-center`}
    >
      {totalAmount}
    </span>
  ) : null;

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
            {textRenderer}
            <i className={`${classes.icon} fa fa-cart-shopping`}></i>
            {badgeRenderer}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TheHeader;
