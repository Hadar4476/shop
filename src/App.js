import React from "react";
import { useDispatch } from "react-redux";
import { globalActions } from "./store";

import TheHeader from "./components/TheHeader/TheHeader";
import Products from "./components/Products/Products";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalActions.products.initProducts());
  }, [dispatch]);

  return (
    <div>
      <TheHeader />
      <main>
        <Products />
      </main>
    </div>
  );
};

export default App;
