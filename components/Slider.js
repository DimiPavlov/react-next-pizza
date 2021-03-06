import Image from "next/image";
import styles from "../styles/Slider.module.css";
import React, { useState } from "react";

const images = [
  "/images/slider4.png",
  "/images/slider5.png",
  "/images/slider2.png",
  "/images/slider1.png",
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleArror = (direction) => {
    if (direction === "l") setIndex(index !== 0 ? index - 1 : 3);
    if (direction === "r") setIndex(index !== 3 ? index + 1 : 0);
  };
  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArror("l")}
      >
        <Image
          src="/images/arrowl.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => {
          return (
            <div className={styles.imgContainer} key={i}>
              <Image src={img} alt="" layout="fill" objectFit="contain" />
            </div>
          );
        })}
      </div>

      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArror("r")}
      >
        <Image
          src="/images/arrowr.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Slider;
