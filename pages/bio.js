import Head from 'next/head';
import Bio from '../components/Bio';
import styles from '../styles/Home.module.css';

export default function BioPage() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Justin Nelson Music - Bio</title>
        <meta name="Justin Nelson Music - Bio" content="Justin Nelson Music - Bio" />
        <link rel="icon" href="/img/JustinLogo.svg" />
      </Head>
      

      <Bio/>
      

      
    </div>
    </>
  )
}