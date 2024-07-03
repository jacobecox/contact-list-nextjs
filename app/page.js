import styles from './page.module.css';
import { ContactList } from './components/contactList'
import { Contact } from './components/contact'
import { NewContact } from './components/newContact'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='text-center'>
        <h1>Main Page</h1>
        <NewContact>Add New Contact</NewContact>
        <ContactList>Contact List</ContactList>
        <Contact>Contact</Contact>
      </div>
    </main>
  )
}
