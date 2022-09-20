import React from "react";
import { useDispatch } from "react-redux";
import { globalActions } from "../../../store";

const CartItem = (props) => {
  const { id, title, image, price, quantity } = props;
  const dispatch = useDispatch();

  const totalPrice = price * quantity;

  const onRemoveCartItem = () => {
    dispatch(globalActions.cart.removeCartItem(id));
  };

  return (
    <li>
      <div>
        <span onClick={onRemoveCartItem}>x</span>
      </div>
      <div>
        <div>
          <img src={image} alt={title} />
          <span>{title}</span>
        </div>
        <div>
          <div>
            <span>{quantity}</span>
          </div>
          <div>
            <span>{totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
