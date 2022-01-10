import Image from "next/image";
import React from "react";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tableTr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/pizza.png"
                  alt=""
                  layout="fill"
                  objectfit="cover"
                />
              </div>
            </td>
            <td className={styles.name}>CORALZO</td>
            <td className={styles.extras}>Double ingredients, garlic sause</td>
            <td className={styles.price}>$18.90</td>
            <td className={styles.quantity}>2</td>
            <td className={styles.total}>$37.80</td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/pizza.png"
                  alt=""
                  layout="fill"
                  objectfit="cover"
                />
              </div>
            </td>
            <td className={styles.name}>CORALZO</td>
            <td className={styles.extras}>Double ingredients, garlic sause</td>
            <td className={styles.price}>$18.90</td>
            <td className={styles.quantity}>2</td>
            <td className={styles.total}>$37.80</td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Cart total</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>Checkout Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
