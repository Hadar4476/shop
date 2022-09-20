import React from "react";
import { useDispatch } from "react-redux";
import { globalActions } from "../../../store";

import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  const { id, title, image, price, quantity } = props;
  const dispatch = useDispatch();

  const totalPrice = price * quantity;

  const onRemoveCartItem = () => {
    dispatch(globalActions.cart.removeCartItem(id));
  };

  return (
    <li className={classes["cart-item"]}>
      <div
        className={`${classes.header} d-flex align-items-center justify-content-end`}
      >
        <i
          className={`${classes.icon} fa-solid fa-xmark d-flex align-items-center justify-content-center`}
          onClick={onRemoveCartItem}
        ></i>
      </div>
      <div
        className={`${classes.body} d-flex align-items-end justify-content-between`}
      >
        <div className={`${classes.info} d-flex flex-column`}>
          <img src={image} alt={title} />
          <span className={classes.title}>{title}</span>
        </div>
        <div
          className={`${classes["quantity-and-total-price"]} d-flex flex-column`}
        >
          <div className={`${classes.quantity} d-flex`}>
            <i className={`${classes.icon} fa-solid fa-xmark`}></i>
            <span className={classes.text}>{quantity}</span>
          </div>
          <div className={`${classes["total-price"]} d-flex`}>
            <i className={`${classes.icon} fa-solid fa-dollar-sign`}></i>
            <span className={classes.text}>{totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
