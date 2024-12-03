import React from "react";
import Categories from "../components/Categories";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[50vh] ">
      <div className="ml-4 my-2 flex items-center gap-1">
        <p
          onClick={() => {
            navigate("/");
          }}
          className="font-bold cursor-pointer"
        >
          Home
        </p>
        <MdChevronRight />
        <p className="text-yellow-500">All Products</p>
      </div>
      <div className="mb-10">
        <Categories />
      </div>
    </div>
  );
};

export default Products;
