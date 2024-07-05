import React from 'react';


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

  //  figuring out how to line items in rows
  // also figuring out why image is not displaying properly

    return (
      <div className='container-fluid' key={contact.id}>
        <div className='row col-md-6'>
          <img className='media-object' src={imageUrl}/>
        </div>
        <div className='col-md-6'>
          <p>{contact.name}</p>
        </div>
      </div>
    );
 
  }); 
  return (
    <div className='row col12-col-md-4 list-group'>
      <h5>Profile Picture</h5>
      <ul>
        {contactItems}
      </ul>
    </div>
  )
};