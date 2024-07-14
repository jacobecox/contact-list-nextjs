'use client'
import  { useState } from 'react';

export const SearchBar = ({ onSearchTermChange }) => {
	const [term, setTerm] = useState('');

	return (
		<div className='search-bar'>
			<input className='search text-center'
        placeholder="Search Contacts"
				value={term}
				onChange={(event) => {
					setTerm(event.target.value);
					onSearchTermChange(event.target.value);
				}}
			/>
		</div>
	);

}