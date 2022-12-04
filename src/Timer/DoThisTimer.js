import React, { useState, useEffect } from 'react'
import '../style.css'

const ReDontThisTimer = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNumber((prev) => prev + 1)
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <div className='dont-this'>
      <div className='title'>
        <h1> Referential Equality Timer Do This ✅</h1>
      </div>
      <span>  Number: {number} </span>
    </div>
  )
}

export default ReDontThisTimer