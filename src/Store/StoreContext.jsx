import { createContext, useState } from "react";
import data from "../Data/Data.json";
export const StoreContext = createContext();

const MyContext = ({ children }) => {
  const [products, setProducts] = useState(data);
  return <StoreContext.Provider value={{products}}>{children}</StoreContext.Provider>;
};

export default MyContext;
