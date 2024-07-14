import React from 'react';
import './contact.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Contact = ({ contacts }) => {

 if (!contacts) {
		return (
			<div className='text-center'>
				<p>No results</p>
			</div>
		);
	};

   const contactItems = contacts.map ((contact) => {
   const imageUrl = contact.photo;

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
             <img className='small-image' src={imageUrl}   alt='contact photo'/>
            </div>
            <div className='col-md-2'>
            <Link className='contact-layout' href={`/contactinfo/${contact.id}`}>{contact.name}</Link>
           </div>
           <div className='col-md-3'>
             <p className='contact-layout'>{contact.phone}</p>
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