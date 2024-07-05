'use client'
import styles from './page.module.css';
import axios from 'axios';
import { useState } from 'react';
import { ContactList } from './components/contactList'
import { Contact } from './components/contact'
import { NewContact } from './components/newContact'
import { SearchBar } from './components/searchBar';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const onContactSelect = (selectedContact) => {
    selectedContact(selectedContact);
  };
  
      const contactSearch = (term) => {
        
    axios
		.get('./data.json')
		.then((response) => {
		console.log(response.data.contacts);
      setContacts(response.data.contacts)
		})
		.catch((error) => {
			console.error(error);
		});
    
      };


  return (
    <main className={styles.main}>
      <div className='text-center'>
        <h1>Contacts</h1>
        <SearchBar onSearchTermChange={contactSearch}/>
        <NewContact>Add New Contact</NewContact>
        <Contact contacts={contacts}/>
        <ContactList onContactSelect={onContactSelect}contacts={contacts}>Contacts</ContactList>
        
      </div>
    </main>
  )
}
