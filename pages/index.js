import Head from "next/head";
import Image from "next/image";
import PizzaList from "../components/PizzaList";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to my Pizza place</title>
        <meta name="description" content="Can't beat my pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <PizzaList />
    </div>
  );
}
