import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useState } from "react";
import { CartContext } from "../context/cartContext";
import Footer from "../pages/home/components/Footer";

function RootLayout() {
  const name = "Manupa";

  const [cart, setCart] = useState([]);

  const updateCart = (product) => {
    if (cart.find((el) => product._id === el._id)) {
      //! Handle the scenario where if product is already in cart
      setCart(
        cart.map((el) =>
          el._id === product._id ? { ...el, count: el.count + 1 } : el
        )
      );
      return;
    }
    //! Handle the scenario where if product is added to the cart for the first time
    setCart([...cart, { ...product, count: 1 }]);
    return;
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart: cart, updateCart: updateCart, clearCart: clearCart }}
    >
      <main>
        <Navigation name={name} />
        <Outlet />
        <Footer/>
      </main>
    </CartContext.Provider>
  );
}

export default RootLayout;