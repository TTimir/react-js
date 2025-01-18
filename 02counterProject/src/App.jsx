import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(1)
  
  // let counter = 1;

  const addValue = () => {
    if(counter < 20) {
      counter = counter + 1;
      console.log(counter);
      setCounter(counter);
    }else{
      console.log("Counter cannot go above 20");
    }
  }

  const removeValue = () => {
    if(counter > 0) {
      counter = counter - 1;
      console.log(counter);
      setCounter(counter);
    }else{
      console.log("Counter cannot go below 0");
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <p>Current Count: {counter}</p>

      <button 
      onClick={addValue}>+ Add</button>
      <br />
      <button
      onClick={removeValue}>- Remove</button>
    </>
  )
}

export default App
