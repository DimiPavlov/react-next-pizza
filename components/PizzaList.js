import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Best Pizza around you.</h3>
      <p className={styles.description}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which look even slightly believable. There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised
        words which look even slightly believable. There are many variations of
        passages of Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injected humour, or randomised words which
        look even slightly believable.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
