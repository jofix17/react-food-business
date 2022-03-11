import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalAmount = `P${ctx.totalAmount.toFixed(2)}`;
  const isEmpty = ctx.items.length > 0;

  const addToCartHandler = (item) => {
    ctx.addItem({...item, amount: 1 });
  };

  const removeFromCartHandler = (id) => {
    ctx.removeItem(id)
  };

  const cartItems = ctx.items.map((item) => (
    <CartItem
      key={item.id}
      amount={item.amount}
      price={item.price}
      name={item.name}
      onRemove={removeFromCartHandler.bind(null, item.id)}
      onAdd={addToCartHandler.bind(null, item)}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {isEmpty && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
