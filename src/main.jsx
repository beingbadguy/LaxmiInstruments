import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import About from "./components/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Enquiry from "./Pages/Enquiry.jsx";
import Products from "./Pages/Products.jsx";
import MyContext from "./Store/StoreContext.jsx";
import SingleProducts from "./Pages/SingleProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },

      { path: "/about", element: <About /> },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/enquiry",
        element: <Enquiry />,
      },
      {
        path: "/product/:name",
        element: <SingleProducts />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <h1>Page Not Found</h1> }, // Default route if no match is found
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContext>
      <RouterProvider router={router} />
    </MyContext>
  </StrictMode>
);
