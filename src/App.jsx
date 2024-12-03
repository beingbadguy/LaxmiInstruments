import React, { useContext } from "react";
import Autoslider from "./components/Autoslider";
import About from "./components/About";
import Categories from "./components/Categories";
import { StoreContext } from "./Store/StoreContext";
import FAQ from "./components/FAQ";

const App = () => {
  // const { products } = useContext(StoreContext);
  // console.log(products);
  return (
    <div className="min-h-[50vh] select-none">
      <Autoslider />

      <div className="my-5">
        {" "}
        <Categories />
      </div>
      <div>
        <FAQ />
      </div>
    </div>
  );
};

export default App;
