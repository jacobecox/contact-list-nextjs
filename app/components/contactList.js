import React from 'react';
import { Contact } from './contact';

export const ContactList = ({contacts, onContactSelect}) => {
  const contactItems = contacts.map ((contact) => {
    
    return (
      
      <Contact
      key={contacts.id}
      />
    );

  });
  return <ul className='col-12 col-md-4 list-group'>{ContactList}</ul>
};
