import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const productContext = createContext([]);
export const cartContext = createContext([]);

const Root = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);
  return (
    <productContext.Provider value={products}>
      <cartContext.Provider value={[cart, setCart]}>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </cartContext.Provider>
    </productContext.Provider>
  );
};

export default Root;
