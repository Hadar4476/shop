import React from "react";

const Product = (props) => {
  const { id, title, description, image, price } = props;

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
          <button>+</button>
        </div>
        <div>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
