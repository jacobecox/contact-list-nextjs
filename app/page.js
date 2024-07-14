'use client'
import styles from './page.module.css';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { Contact } from './components/contact'
import { SearchBar } from './components/searchBar';
import { NewContact } from './components/newContact';

export default function Home() {

  const [contacts, setContacts] = useState('');  
  
 
  
      const contactSearch = (term) => {
        
    axios
		.get('./data.json')
		.then((response) => {
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
        <div>
          <NewContact><Link href='/newcontact'></Link></NewContact>
        </div>
        
        <div className="container-fluid">
      <div className="row col-md-12">
        <div className='col-md-2 contact-layout'>
        </div>
        <div className="col-md-2 contact-layout">
          Photo
        </div>
        <div className="col-md-2 contact-layout">
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
