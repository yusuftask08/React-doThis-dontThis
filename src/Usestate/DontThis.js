import React, { useState, useEffect } from 'react'
import '../style.css';

const DontThis = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [firstName, lastName]);

  console.count('component render')
  return (
    <div className='dont-this'>
      <div className='title'>
        <h1> useState Dont This ❌</h1>
      </div>
      First Name:
      <input
        value={firstName}
        onChange={((e) => setFirstName(e.target.value))}
      />
      Last Name:
      <input
        value={lastName}
        onChange={((e) => setLastName(e.target.value))}
      />

      Full name: {fullName}
    </div>
  )
}

export default DontThis