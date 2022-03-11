import React from "react";
import styles from "./Header.module.css";
import image from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={props.onShow}/>
      </header>
      <div className={styles['main-image']}>
        <img src={image} alt='A table full of food'/>
      </div>
    </>
  );
};

export default Header;
