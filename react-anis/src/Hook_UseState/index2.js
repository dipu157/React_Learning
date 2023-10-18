import React,{useState} from 'react'

export default function Hook_UseStateF() {

    const [count,setCount] = useState(0)
    const HIncre = () => {
        setCount(count+1);
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={HIncre}>Increment</button>
    </div>
  )
}
