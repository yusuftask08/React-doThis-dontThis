import React, { useState } from 'react'
import '../style.css'
const DoThis = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    console.count('component render')
    return (
        <div className='dont-this'>
            <div className='title'>
                <h1> useState Do This ✅</h1>
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

            Full name: {firstName} {lastName}
        </div>
    )
}

export default DoThis