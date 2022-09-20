import React from "react";
import { useSelector } from "react-redux";

import Product from "./Product/Product";

const Products = () => {
  const { items } = useSelector((state) => state.products);

  const productElements = items.length
    ? items.map((i) => {
        return (
          <div key={i.id}>
            <Product
              id={i.id}
              title={i.title}
              description={i.description}
              image={i.image}
              price={i.price}
            />
          </div>
        );
      })
    : null;

  return (
    <div>
      <div>
        <div>{productElements}</div>
      </div>
    </div>
  );
};

export default Products;
