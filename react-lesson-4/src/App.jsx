import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function heandleNext() {
    setCount(count + 1)
  }
  function heandlePrev() {
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={heandleNext}>Increment</button>
      <button onClick={heandlePrev}>Decrement</button>
      <h1>Counter: {count} </h1>
    </div>
  )
}

export default App


