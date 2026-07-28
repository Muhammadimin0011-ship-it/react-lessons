import { useState } from 'react'
import Button from './button'
import './App.css'

function App() {
  const [state, setstate] = useState("")

  return (
    <div>
      <h1>{state}</h1>
      <input  
      style={{outlineColor: state.length >= 5 ? "green" : "red"}}
      onChange={(e) =>{
        setstate(e.target.value)
      }} type="text" />
    </div>
  )
}

export default App
