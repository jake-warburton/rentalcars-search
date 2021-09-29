import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchHolder from "../components/search-holder";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rentalcars Search Bar Frontend Test Page</title>
        <meta
          name="description"
          content="Rentalcars Search Bar Frontend Test Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchHolder />
      </main>
    </div>
  );
};

export default Home;
