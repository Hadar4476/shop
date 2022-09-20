import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../../store";

import classes from "./Product.module.scss";

const Product = (props) => {
  const { id, title, description, image, price } = props;

  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const shouldDisableDecrease = !items.find((i) => i.id === id);

  const onIncreaseQuantity = () => {
    const product = {
      id,
      title,
      description,
      image,
      price,
    };

    dispatch(globalActions.cart.increaseQuantity(product));
  };

  const onDecreaseQuantity = () => {
    if (shouldDisableDecrease) {
      return;
    }

    dispatch(globalActions.cart.decreaseQuantity(id));
  };

  return (
    <div
      className={`${classes.product} d-flex flex-column justify-content-between`}
    >
      <img src={image} alt={title} />
      <div className={`${classes.info} d-flex flex-column`}>
        <span className={classes.title}>{title}</span>
        <span className={classes.description}>{description}</span>
      </div>
      <div
        className={`${classes.bottom} d-flex align-items-center justify-content-between`}
      >
        <div className={`${classes.actions} d-flex align-items-center`}>
          <button
            className={`${classes.decrease} d-flex align-items-center justify-content-center`}
            disabled={shouldDisableDecrease}
            onClick={onDecreaseQuantity}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <button
            className={`${classes.increase} d-flex align-items-center justify-content-center`}
            onClick={onIncreaseQuantity}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className={`${classes.price} d-flex`}>
          <i className={`${classes.icon} fa-solid fa-dollar-sign`}></i>
          <span className={classes.text}>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
