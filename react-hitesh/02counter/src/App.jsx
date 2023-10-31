import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(15);

  //let counter = 15;

  const addValue = () => {
    //console.log("Value added" + Math.random());
    counter = counter + 1;
    setCounter(counter);
    console.log(counter)
  }

  const removeValue = () => {
    //console.log("Value added" + Math.random());
    counter = counter - 1;
    setCounter(counter);
    console.log(counter)
  }

  return (
    <>
      <h1>Cha or React with Vite</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
