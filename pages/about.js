import Image from 'next/image'
import styles from '../styles/About.module.css'

const About  = () => {
    return ( 
        <div>
            <h1 className={styles.title}>About</h1>
            <div className={styles.img}>
            <Image src="/marcEdeveloper.JPG" width={401} height={481} />
            </div>
        </div>
     );
}
 
export default About;