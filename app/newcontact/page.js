'use client';
import Link from 'next/link';
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { contactData } from 'app/data/contactData';
import PropTypes from 'prop-types'

export default function NewContact() {

  const generateId = () => Math.round(Math.random() * 100000000);

  const id = generateId()

  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(null);
	const [number, setNumber] = useState('');
  const [email, setEmail] = useState(null);
	const router = useRouter();


  const handleSubmitContactClick = (event) => {

    contactData.addContact ({
      id,
      photo,
      name,
      number,
      email
    })

		router.push('/');
  }; 
  
  NewContact.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired
  }
  

  return (
    <div>
      <h1>Create New Contact</h1>
    <form>
				<label>Photo Link</label>
				<input
					type='text'
					className='form-control'
          placeholder='Enter photo url'
					onChange={(event) => setPhoto(event.target.value)}
				/>

				<br />

				<label>Name</label>
				<input
					type='text'
					className='form-control'
          placeholder='Enter name'
					onChange={(event) => setName(event.target.value)}
				/>
   

				<br />

				<label>Phone Number</label>
				<input
					type='text'
					className='form-control'
          placeholder='Enter phone number'
					onChange={(event) =>
						setNumber(event.target.value)
					}
				/>

				<br />

				<label>Email</label>
				<input
					type='text'
					className='form-control'
          placeholder='Enter email'
					onChange={(event) => setEmail(event.target.value)}
				/>

        <br />

				<button type='button' className='submit-button' onClick={handleSubmitContactClick}>
					Submit
				</button>
			</form>

      <br />

    <Link href='/'><button className='back-button'>Back</button></Link>
  </div>
  )


}
  