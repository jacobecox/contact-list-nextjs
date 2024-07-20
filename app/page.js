'use client'
import 'app/components/contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';
import Link from 'next/link';
import { useState } from 'react'
import { NewContact } from './components/newContact';
import { contactData } from './data/contactData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  const contacts = contactData.all()

  const [search, setSearch] = useState('');

  return (
    <main className={styles.main}>
      <div className='text-center'>
        <h1>Contacts</h1>
      </div>
      <input className='search text-center'
    placeholder="Search Contacts" onChange={(e) => setSearch(e.target.value)}/>
        <div>
          <NewContact><Link href='/newcontact'></Link></NewContact>
        </div>
      
      < br/>
        
      <div className='container mt-4'>
      <table className='table'>
          <thead>
            <tr className='text-center'>
              <th>Actions</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Number</th>
              <th>Email</th>
            </tr>
            
          </thead>
          <tbody>
            {contacts.filter((contact) => {
              return search.toLowerCase() === '' ? contact : contact.name.     toLowerCase().includes(search);
              }).map((contact)=> (
              <tr key={contact.id}>
                      <td>
                        <FontAwesomeIcon className='icon' icon={faPen} style={{color: "#000000",}} />
                        <FontAwesomeIcon className='icon' icon={faTrash} style={{color: "#000000",}} />
                      </td>
                      <td>
                         <img className='small-image' src={contact.photo}   alt='contact photo'/>
                       </td>
                       <td> <Link href={`/contactinfo/${contact.id}`}>{contact.name}</Link></td>
                       <td>{contact.number}</td>
                       <td>{contact.email}</td>
                   </tr>
                  ))}
            </tbody>
        </table> 
      </div>
    </main>
  )
}