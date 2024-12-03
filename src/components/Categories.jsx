import React, { useContext } from "react";
import { StoreContext } from "../Store/StoreContext";
// import { PiUserRectangleBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const { products } = useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className="mx-4 select-none">
      <h1 className="lg:mx-8 text-3xl font-bold ">Our Products</h1>
      <div className=" mt-6 grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-12">
        {products.map((product, index) => (
          <div
            className="text-center flex items-center justify-center flex-col gap-4"
            key={index}
          >
            <div
              className="bg-gray-200 p-10 rounded-full sm:rounded-full cursor-pointer  hover:scale-90 transition-all duration-300"
              onClick={() => {
                navigate(`/product/${product.name}`);
              }}
            >
              <img
                src={product.imageSrc}
                alt={product.name}
                className="h-20 w-20"
              />
            </div>
            <p
              className="font-bold cursor-pointer hover:text-gray-400"
              onClick={() => {
                navigate(`/product/${product.name}`);
              }}
            >
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
