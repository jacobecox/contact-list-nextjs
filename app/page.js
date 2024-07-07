'use client'
import styles from './page.module.css';
import axios from 'axios';
import { useState } from 'react';
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
      <div className='container-fluid text-center'>
        <h1>Contacts</h1>
        <SearchBar onSearchTermChange={contactSearch}/>
        <NewContact>Add New Contact</NewContact>
        <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 contact-layout">
          Photo
        </div>
        <div className="col-md-3 contact-layout">
          Name
        </div>
        <div className="col-md-3 contact-layout">
          Number
        </div>
        <div className="col-md-3 contact-layout">
          Email
        </div>
      </div>
    </div>
    <hr/>

        <Contact contacts={contacts}/>
      </div>
    </main>
  )
}
