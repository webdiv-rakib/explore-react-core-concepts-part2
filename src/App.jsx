import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick() {
    alert('Button Clicked');
  }
  const handleClick2 = () => {
    alert("Button 2 Clicked")
  }

  const addToFive = (num) =>  {
    alert(num+5)
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('Button 3 Clicked') }}>Click3</button>
      <button onClick={() => addToFive(3)}>Click 4</button>
    </>
  )
}

export default App
