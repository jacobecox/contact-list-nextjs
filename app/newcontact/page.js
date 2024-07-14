'use client';
import Link from 'next/link';
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function NewContact() {

  const id  = () => Math.round(Math.random() * 100000000);

  const [photo, setPhoto] = useState(null);
	const [name, setName] = useState(null);
	const [number, setNumber] = useState(null);
  const [email, setEmail] = useState(null);
	const router = useRouter();

  const handleSubmitContactClick = () => {
    try{
    axios.post('./data.json',{
      id,
      photo,
			name,
			number,
			email,
		});
    console.log('Data added successfully!');
  } catch (error) {
    console.error('Error adding data:', error);
    console.log('Error adding data');
  }
		router.push('/');
	};

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
						setNumber(parseInt(event.target.value, 10))
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
  