import React, { useState, useEffect } from 'react'
import '../style.css'

const ReDontThis = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [mode, setMode] = useState(false);

  const person = { age, name };
  
  useEffect(() => {
    console.log('person', person);
  }, [person])

  return (
    <div className='dont-this' style={{background: mode ? '#333' : '#fff'}}>
      <div className='title'>
        <h1> Referential Equality Dont This ❌</h1>
      </div>
      Name:
      <input
        value={name}
        onChange={((e) => setName(e.target.value))}
      />
      Age:
      <input
        value={age}
        onChange={((e) => setAge(e.target.value))}
      />
      Dark Mode:
      <input
        type='checkbox'
        value={mode}
        onChange={(e) => setMode(e.target.checked)}
      />
    </div>
  )
}

export default ReDontThis