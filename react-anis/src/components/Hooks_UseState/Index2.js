import React, { useState } from 'react'

export default function Index2() {


    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount(count+1);
    }

  return (
    <div>
        <h1>Count : {count}</h1>
        <button className='btn' onClick={handleIncrement}>Increrment</button>
    </div>
  )
}
