import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Info() {
    return (
        <main className={styles.main}>
        
        <div className={styles.title}>Experience life with music.</div>
        

        <p className={styles.description}>
          Whether you want to learn how to play your favorite tune or take your event to the next level with a talented jazz band, Justin is ready to help unleash the sonic power of melody, harmony, and rhythm. 
        </p>

        <div className={styles.grid}>
          <Link href="/lessons" className={styles.card}>
            <h2>Lessons </h2>
            <p>Learn about lesson options, both in person and online.</p>
          </Link>

          <Link href="/contact" className={styles.card}>
            
            <h2>Contact </h2>
            <p>Have a question? Get in touch with Justin regarding lessons or events.</p>
            
          </Link>

          <Link
            href="https://www.thebash.com/jazz-piano/justin-nelson-music"
            className={styles.card} 
          >
            <h2>Events </h2>
            <p>Book Justin solo or with a band to enhance your next event!</p>
          </Link>

          <Link
            href="/gallery" 
            className={styles.card}
          >
            <h2>Gallery </h2>
            <p>
              View videos of Justin performing and working with students.
            </p>
          </Link>
        </div>
      </main>
    );
};