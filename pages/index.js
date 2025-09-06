import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Info from '../components/Info';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Justin Nelson Music - Home</title>
        <meta name="Justin Nelson Music - Home" content="Justin Nelson Music - Home" />
        <link rel="icon" href="/img/JustinLogo.svg" />
      </Head>
      
      <Banner/>
      <Info/>
      

      
    </div>
    </>
  )
}