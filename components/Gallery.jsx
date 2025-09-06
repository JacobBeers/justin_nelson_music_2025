import React from "react";
import styles from '../styles/Home.module.css';



const Gallery = () => {

    
        return (
            <div className={styles.container}>
                
                
            <div className={styles.videoList}>
                    <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/Sq2PEUeZ06o" title="YouTube video player"  ></iframe>
                    <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/ZdnlOHGQO24" title="YouTube video player"></iframe>
                    <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/KKxuArz7fCQ" title="YouTube video player"></iframe>
                    <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/ArPGQCwKNrY" title="YouTube video player"></iframe>
            </div>
            </div>
        )
        
    

}

export default Gallery