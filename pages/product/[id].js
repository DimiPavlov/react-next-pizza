import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/images/pizza.png",
    name: "Pepperonni",
    price: [19.9, 24.9, 28.9],
    description:
      " pepperoni pizza is undoubtedly the best in Melbourne. Topped with mozzarella, hot salami, red capsicum, black olives and cheese",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" objectFit="contain" layout="fill" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.description}>{pizza.description}</p>
        <h3 className={styles.choose}>Choose you size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/images/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/images/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/images/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Spicy Sause</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Garlic Sause</label>
          </div>
        </div>
        <input type="number" className={styles.quantity} />
        <button className={styles.button}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
