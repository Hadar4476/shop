import React from "react";
import { useDispatch } from "react-redux";
import { globalActions } from "./store";

import Products from "./components/Products/Products";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalActions.products.initProducts());
  }, [dispatch]);

  return (
    <div>
      <main>
        <Products />
      </main>
    </div>
  );
};

export default App;
