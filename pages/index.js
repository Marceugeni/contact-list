import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>I've created this webpage using NextJS to learn about the technology. This seems to me like a React framework for simplifying things. Very useful and strightforwad, easy to use and to mantain/scale.</p>
      <p className={styles.text}>The project is a very simple website to store personal contacts. It is so simple to make and yet allows you to learn about the basics of this technology.</p>
      <Link href="/contacts">
        <a className={styles.btn}>go to contactList</a>
      </Link>
    </div>
  )
}