import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            The Best Pizzas Under One Roof. Good To The Last Slice
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find our restaurants</h1>
          <p className={styles.text}>
            1855 R.Don Chaddel
            <br />
            Denver, 54553
            <br />
            (402) 365- 2201
          </p>
          <p className={styles.text}>
            2727 Mitgrade Road
            <br />
            Golden, 54007
            <br />
            (402) 210 - 5650
          </p>
          <p className={styles.text}>
            2422 Wendy Fuckel
            <br />
            Lakewood, 54200
            <br />
            (402) 220 - 1101
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working Hours</h1>
          <p className={styles.text}>
            Monday - Friday
            <br /> 09:00 - 22:00
          </p>
          <p className={styles.text}>
            Saturday - Sunday
            <br /> 11:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
