import React, { useContext, useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const [isHighLighted, setIsHighLighted] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;
  const numberOfCartItems = items.reduce(
    (currCount, item) => currCount + item.amount,
    0
  );

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setIsHighLighted(true);

    const timer = setTimeout(() => {
      setIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClass = `${isHighLighted ? styles.bump : ""}`;

  return (
    <>
      <Button className={btnClass} onClick={props.onShow}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
      </Button>
    </>
  );
};

export default HeaderCartButton;
