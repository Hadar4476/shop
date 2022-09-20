import React from "react";
import { useDispatch } from "react-redux";
import { globalActions } from "../../store";

const { cart: actions } = globalActions;

const TheHeader = () => {
  const dispatch = useDispatch();

  const onToggleCart = () => {
    dispatch(actions.showCart());
  };

  return (
    <header>
      <div>
        <span>Shop</span>
        <nav>
          <div onClick={onToggleCart}>
            <span>Cart</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TheHeader;
