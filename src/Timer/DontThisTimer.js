import React, { useState, useEffect } from 'react'
import '../style.css'

const ReDontThisTimer = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setNumber(number + 1)
    }, 1000);
    
    console.count('use effect number render')
  }, [number])

  return (
    <div className='dont-this'>
      <div className='title'>
        <h1> Referential Equality Timer Dont This ❌</h1>
      </div>
      <span>  Number: {number} </span>

    </div>
  )
}

export default ReDontThisTimer