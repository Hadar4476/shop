import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const { items } = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartTotalPrice = items.reduce(
      (acc, i) => (acc += i.quantity * i.price),
      0
    );
    setTotalPrice(cartTotalPrice);
  }, [items]);

  const emptyCartRenderer = !items.length ? (
    <div>
      <span>Your cart is empty</span>
    </div>
  ) : null;

  const cartItemElements = items.length
    ? items.map((i) => (
        <CartItem
          id={i.id}
          title={i.title}
          image={i.image}
          price={i.price}
          quantity={i.quantity}
        />
      ))
    : null;

  const bodyRenderer = items.length ? <div>{cartItemElements}</div> : null;

  const bottomRenderer = items.length ? (
    <div>
      <div>
        <span>Total price</span>
        <div>
          <span>{totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div>
      <div>
        <h1>Your cart</h1>
      </div>
      {emptyCartRenderer}
      {bodyRenderer}
      {bottomRenderer}
    </div>
  );
};

export default Cart;
