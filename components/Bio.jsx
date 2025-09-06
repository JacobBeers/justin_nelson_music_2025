import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import pic from "../public/img/JustinTrio.jpeg"

export default function Bio() {
    return (
        <main className={styles.main}>
        
        <div className={styles.title}>About Justin</div>

        <Image src = {pic} height={300} width={700} alt = "Justin Trio" className={styles.trioImage}/>
        

        <p className={styles.descriptionBio}>
        Justin Nelson is a jazz pianist and movement specialist living in Winston-Salem, NC. He is a certified instructor of the Lister-Sink Method (Injury-Preventive Keyboard Technique) and AMSAT-cerified Alexander Technique teacher (aka your local expert in sitting!).
        </p>

        <p className={styles.descriptionBio}>
        Born in Gainesville, Florida, he began studying the saxaphone at the age of 12 and ever since has had an intense passion for music. He received his A.A. from Florida State University, with an emphasis in jazz saxaphone performance and philosophy. During his time there he had the pleasure of learning from great musicians such as Chick Corea, Rufus Reid, Bill Peterson, Bill Kennedy, Leon Anderson Jr., Rodney Jordan, Scotty Barnhart, Doron Kima and Marcus Roberts.   
        </p>

        <p className={styles.descriptionBio}>
        Upon deciding to switch instruments to the piano, he then transferred to the University of Florida (UF) to pursue a degree in English. During this time Justin began studying the piano seriously and realized it was what he wanted to do with his life. He has had the pleasure of working with Gordon Goodwin and his Big Phat Band, including but not limited to: Wayne Bergeron, Eric Marienthal, Andy Martin, Sal Lozano, Bernie Dresel and Brian Bromberg. He has also had the pleasure of performing internationally in Paris and Prague. He stands on the shoulders of giants and recognizes the humble nature that is intrinsic to becoming great in the field of music.  
        </p>

        <p className={styles.descriptionBio}>
        Upon his graduation from UF, Justin then attended and graduated from a groundbreaking course in piano music-making and technique, entitled “Injury-Preventive Keyboard Technique,” created by world-renowned musician Barbara Lister-Sink. The three-year program helped him to free himself from physical limitations at the piano in order to allow his artistic ideas to flow freely. He is a certified teacher of the Lister-Sink Method and a great proponent of its principles. Now, having performed and taught all over North Carolina for the past 15 years, Justin has completed his training to be an AMSAT Certified Alexander Technique Teacher and is excited for the opportunities this foray into movement specialization will bring his students.
        </p>

        
      </main>
    );
};