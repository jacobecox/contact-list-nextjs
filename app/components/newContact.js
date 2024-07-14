import Link from 'next/link'
export const NewContact = () => {
  const handleClick = () => {
};

return (
  <div>
    <Link href='/newcontact'><button onClick={handleClick}  className='button'>Add New Contact</button></Link>
  </div>
) };