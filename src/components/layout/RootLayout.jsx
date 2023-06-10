import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "./../shared/Footer";
import Cart from ".././modal/Cart";
import { useState } from "react";
import CartProvider from "./../../hooks/context/CartProvider";

const RootLayout = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const closeCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <Outlet />
      {cartIsShown && <Cart onClose={closeCartHandler} />}

      <Footer />
    </CartProvider>
  );
};
export default RootLayout;
