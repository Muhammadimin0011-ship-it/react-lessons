import { useState } from 'react'
import Button from './button'
import './App.css'

function App() {
  return(
    <div>
      <Button variant="text">text</Button>
      <Button variant="conteiner">text</Button>
      <Button variant="outlined">text</Button>
    </div>
  )
}

export default App
