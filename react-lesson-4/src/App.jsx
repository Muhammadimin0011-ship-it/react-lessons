import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)
  const [name, setName] = useState("Ali")

  function heandleNext() {
    setCount(count + 1)
  }
  function heandlePrev() {
    setCount(count - 1)
  }

  function plusLike() {
    setLike(like + 1)
  }

  function almashtirish() {
    setName("Vali")
  }

  return (
    <div>
      <div>
        <h1>birinchi vazifa</h1>
        <button onClick={heandleNext}>Increment</button>
        <button onClick={heandlePrev}>Decrement</button>
        <h1>Counter: {count} </h1>
      </div>

      <div>
        <h1>Ikkinchi vazifa</h1>
        <button onClick={plusLike}>like</button>
        <h1>Likes: {like}</h1> 
      </div>

      <div>
        <h1>Uchunchi vazifa</h1>
        <button onClick={almashtirish}>Almashtirish</button>
        <h1>Name: {name}</h1>
      </div>
    </div>

  )
}

export default App


