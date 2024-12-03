import React, { useContext, useEffect } from "react";
import { StoreContext } from "../Store/StoreContext";
import { useNavigate, useParams } from "react-router-dom";
import { RiMessage3Line } from "react-icons/ri";
import { MdChevronRight } from "react-icons/md";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { products } = useContext(StoreContext);
  const { name } = useParams();
  const product = products.find((prod) => prod.name === name);

  // Suggested Products
  const suggestedProducts = products
    .filter((pro) => pro.name !== name)
    .slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  if (!product) {
    return <p className="text-center text-lg mt-20">Product not found!</p>;
  }

  return (
    <div className="container  px-4  ">
      <div className="flex items-center gap-2 my-5 md:ml-4 ">
        <p
          onClick={() => {
            navigate("/");
          }}
          className="font-bold cursor-pointer"
        >
          Home
        </p>
        <MdChevronRight />
        <p
          className="font-bold cursor-pointer"
          onClick={() => {
            navigate("/products");
          }}
        >
          All Product
        </p>
        <MdChevronRight />
        <p className="text-yellow-500 font-bold">{name}</p>
      </div>
      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex justify-center">
          <img
            src={product.imageSrc.replace("./", "/")}
            alt={product.name}
            className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            onError={(e) => (e.target.src = "/placeholder.png")}
          />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{product.description}</p>

          <ul className="mt-6 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-800">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <button
            className="mt-8 py-2 px-6 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300 flex items-center gap-2"
            onClick={() => {
              navigate("/enquiry");
            }}
          >
            <RiMessage3Line className="text-xl" />
            Send Enquiry
          </button>
        </div>
      </div>

      {/* Suggested Products */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-900">
          Suggested Products
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {suggestedProducts.map((suggested) => (
            <div
              key={suggested.name}
              className="text-center flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
            >
              <img
                src={suggested.imageSrc.replace("./", "/")}
                alt={suggested.name}
                className="h-32 w-32 object-contain mb-4 rounded-md"
                onError={(e) => (e.target.src = "/placeholder.png")}
              />
              <p className="font-bold text-lg text-gray-800">
                {suggested.name}
              </p>
              <p className="text-gray-500">
                {suggested.description.length > 50
                  ? suggested.description.substring(0, 50) + "..."
                  : suggested.description}
              </p>
              <button
                className="mt-4 py-2 px-4 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300"
                onClick={() => navigate(`/product/${suggested.name}`)}
              >
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
