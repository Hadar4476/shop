import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const { items } = useSelector((state) => state.cart);

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

  return (
    <div>
      <div>
        <h1>Your cart</h1>
      </div>
      {cartItemElements}
    </div>
  );
};

export default Cart;
