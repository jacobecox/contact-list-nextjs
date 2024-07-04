import React from 'react';

export const Contact = ({ contact }) => {
	if (!contact) {
		return (
			<div className='text-center'>
				<p>You have no contacts</p>
			</div>
		);
	}
  const imageUrl = contact.image_url;

	return (
		<li>
      <img src={imageUrl}/>
    </li>
	);
};