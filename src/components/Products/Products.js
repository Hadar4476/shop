import React from "react";
import { useSelector } from "react-redux";

import Product from "./Product/Product";

import classes from "./Products.module.scss";

const Products = () => {
  const { items } = useSelector((state) => state.products);

  const productElements = items.length
    ? items.map((i) => {
        return (
          <div key={i.id} className={classes["product-col"]}>
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
    <div className={classes.products}>
      <div className={`${classes["products-grid"]} container`}>
        <div
          className={`${classes["products-row"]} row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4`}
        >
          {productElements}
        </div>
      </div>
    </div>
  );
};

export default Products;
