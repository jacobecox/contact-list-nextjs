'use client'
import React from 'react';
import 'app/components/contact.css'
import Link from 'next/link';
import { contactData } from '../data/contactData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {

	const contacts = contactData.all();

 if (!contacts) {
		return (
			<div className='text-center'>
				<p>No results</p>
			</div>
		);
  };

  const contactItems = contacts.map((contact) => {

  
    return (
       <div className='container-fluid border' key={contact.id}>
          <div className='row col-md-12'>
          <div className='col-md-1 contact-layout'>
            <FontAwesomeIcon icon={faPen} style={{color: "#000000",}} />
            </div>
            <div className='col-md-1 contact-layout'>
            <FontAwesomeIcon icon={faTrash} style={{color: "#000000",}} />
            </div>
          <div className='col-md-2 contact-layout'>
             <img className='small-image' src={contact.photo}   alt='contact photo'/>
            </div>
            <div className='col-md-2'>
            <Link className='contact-layout' href={`/contactinfo/${contact.id}`}>{contact.name}</Link>
           </div>
           <div className='col-md-3'>
             <p className='contact-layout'>{contact.number}</p>
            </div>
            <div className='col-md-3'>
              <p className='contact-layout'>{contact.email}</p>
            </div>
        </div>
      </div>
    );
  });

  return (
    <div className='row'>
      <ul className='col-md-12'>
        {contactItems}
      </ul>
    </div>
  )
}; 