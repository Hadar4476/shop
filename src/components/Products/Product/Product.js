import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../../store";

const Product = (props) => {
  const { id, title, description, image, price } = props;

  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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

  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <span>{title}</span>
        <span>{description}</span>
      </div>
      <div>
        <div>
          <button>-</button>
          <button onClick={onIncreaseQuantity}>+</button>
        </div>
        <div>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
