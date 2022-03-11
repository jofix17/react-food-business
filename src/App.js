import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModalShown, setIsShown] = useState(false);

  const showModalHandler = () => setIsShown(true);
  const hideModalHandler = () => setIsShown(false);

  return (
    <CartProvider>
      {isModalShown && <Cart onClose={hideModalHandler} />}
      <Header onShow={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
