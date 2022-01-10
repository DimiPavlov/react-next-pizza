import Image from "next/image";
import React from "react";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/pizza.png" width="500" height="500" alt="pizza" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$18.99</span>
      <p className={styles.description}>
        Lorem ipsum dolar sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
