import Image from "next/image";
import React from "react";
import styles from "../../styles/Order.module.css";

const Order = () => {
  const status = 0;
  const currentStatus = (index) => {
    if (index - status < 1) return styles.complete;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.uncomplete;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>48584584584658</span>
              </td>
              <td>
                <span className={styles.name}>John Clark</span>
              </td>
              <td>
                <span className={styles.address}>
                  123 Miami Drive Way, Miami, FL, 33211
                </span>
              </td>
              <td>
                <span className={styles.total}>$79.80</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={currentStatus(0)}>
            <Image src="/images/paid.png" alt="" width={30} height={30} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/images/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={currentStatus(1)}>
            <Image src="/images/bake.png" alt="" width={30} height={30} />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/images/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={currentStatus(2)}>
            <Image src="/images/bike.png" alt="" width={30} height={30} />
            <span>On The Way!</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/images/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={currentStatus(3)}>
            <Image src="/images/delivered.png" alt="" width={30} height={30} />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/images/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
