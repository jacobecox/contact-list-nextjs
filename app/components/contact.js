import React from 'react';
import './contact.css'

export const Contact = ({ contacts }) => {

 if (!contacts) {
		return (
			<div className='text-center'>
				<p>You have no contacts</p>
			</div>
		);
	};

   const contactItems = contacts.map ((contact) => {
   const imageUrl = contact.image_url;

    return (
      <div className='container-fluid' key={contact.id}>
        <div className='row'>
          <div className='col-md-3 contact-layout'>
            <div className='image-wrap'>
            <img className='small-image' src={imageUrl} alt='contact photo'/>
            </div>
          </div>
          <div className='col-md-3'>
          <p className='contact-layout'>{contact.name}</p>
          </div>
        </div>
      </div>
    );
 
  }); 
  return (
    <div className='row col-md-12 list-group'>
      <ul>
        {contactItems}
      </ul>
    </div>
  )
};