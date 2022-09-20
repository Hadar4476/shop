import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem/CartItem";

import classes from "./Cart.module.scss";

const Cart = (props) => {
  const { items } = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingValue, setShippingValue] = useState(0);

  useEffect(() => {
    const cartTotalPrice = items.reduce(
      (acc, i) => (acc += i.quantity * i.price),
      0
    );
    setTotalPrice(cartTotalPrice);

    setShippingValue(() => {
      const totalAmount = items.reduce((acc, i) => acc + i.quantity, 0);
      const cartShippingValue = totalAmount * 2.5;
      return totalAmount > 4 ? cartShippingValue : 0;
    });
  }, [items]);

  const emptyCartRenderer = !items.length ? (
    <div className={classes["empty-cart"]}>
      <span>Your cart is empty</span>
    </div>
  ) : null;

  const cartItemElements = items.length
    ? items.map((i) => (
        <CartItem
          key={i.id}
          id={i.id}
          title={i.title}
          image={i.image}
          price={i.price}
          quantity={i.quantity}
        />
      ))
    : null;

  const bodyRenderer = items.length ? (
    <div className={classes.body}>
      <ul className={classes["cart-item-list"]}>{cartItemElements}</ul>
    </div>
  ) : null;

  const bottomRenderer = items.length ? (
    <div className={`${classes.bottom} d-flex flex-column`}>
      <div
        className={`${classes["total-price"]} d-flex justify-content-between`}
      >
        <span className={classes.text}>Total price</span>
        <div className={`${classes.price} d-flex`}>
          <i className={`${classes.icon} fa-solid fa-dollar-sign`}></i>
          <span className={classes.text}>{totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div
        className={`${classes["shipping-value"]} d-flex justify-content-between`}
      >
        <span className={classes.text}>Shipping value</span>
        <div className={`${classes.price} d-flex`}>
          <i className={`${classes.icon} fa-solid fa-dollar-sign`}></i>
          <span className={classes.text}>{shippingValue.toFixed(2)}</span>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className={classes.cart}>
      <div
        className={`${classes.header} d-flex align-items-center justify-content-center`}
      >
        <h1>Your cart</h1>
      </div>
      {emptyCartRenderer}
      {bodyRenderer}
      {bottomRenderer}
    </div>
  );
};

export default Cart;
