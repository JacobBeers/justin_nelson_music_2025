
import Head from 'next/head';
import Image from 'next/image';
import Banner2 from '../components/Banner2';
import Info from '../components/Info';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Justin Nelson Music - Gallery</title>
        <meta name="Justin Nelson Music - Gallery" content="Justin Nelson Music - Gallery" />
        <link rel="icon" href="/img/JustinLogo.svg" />
      </Head>
      <Banner2/>
      <Gallery/>
      

      
    </div>
    </>
  )
}