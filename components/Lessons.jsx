
import styles from '../styles/Home.module.css';
import Link from 'next/link';



const Lessons = () => {

    
        return (
            <div className={styles.main}>
                <p className={styles.title}>Lessons</p>

                
            <p className={styles.descriptionLessons}>
          Justin offers private lessons for a variety of instruments and styles of music. Lessons are tailored to fit the student's interests, with a focus on creativity and technique. <Link href="https://www.google.com/search?q=justin+nelson+music&oq=justin+nelson+music&aqs=chrome..69i57j35i39j0i512l2j0i22i30j69i60l3.4188j1j7&sourceid=chrome&ie=UTF-8#lrd=0x87df35df7f24d2c7:0xa70f99950641c6d8,1,,," target='_blank' className={styles.reviewText}>Student reviews</Link> have been incredibly positive, and Justin loves working with people of all ages and experience levels. Click the button below to register for lessons. 
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdqCL3aRXkjLvwpeqTxBYFp71Lo1A94CrYpsFhahFEV86bYCA/viewform?usp=sf_link" target="_blank">
        <button className={styles.buttonStyles}>Register Now</button>
        </Link>

        <div className={styles.videoList}>
        <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/uKVxVDqiP1c" title="YouTube video player"></iframe>
                    <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/ZS3tyayEpZo" title="YouTube video player"></iframe>
                    <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/px4ZEwGHNR0" title="YouTube video player"></iframe>
                    <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/IATQDrX9I0A" title="YouTube video player"></iframe>
                    <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/etdljXEN_WM" title="YouTube video player"></iframe>

            </div>
            </div>
        )
        
    

}

export default Lessons