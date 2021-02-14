import styles from '../../styles/Contacts.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { contacts: data }
    }

}

const Contacts = ({ contacts }) => {
    return ( 
        <div>
            <h1>Contacts List</h1>
            {contacts.map(contact => (
               <Link href={'/contacts/' + contact.id} key={contact.id}>
                <a className={styles.single}>
                    <h4>{ contact.name }</h4>
                    <p>{ contact.email }</p>
                </a>
               </Link>
            )

            )}
        </div>
     );
}
 
export default Contacts;