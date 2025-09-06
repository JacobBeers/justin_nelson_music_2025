import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Info from '../components/Info';
import styles from '../styles/Home.module.css';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Justin Nelson Music - Contact</title>
        <meta name="Justin Nelson Music - Contact" content="Justin Nelson Music - Contact" />
        <link rel="icon" href="/img/JustinLogo.svg" />
      </Head>
      
      <Contact/>
     
      

      
    </div>
  )
}