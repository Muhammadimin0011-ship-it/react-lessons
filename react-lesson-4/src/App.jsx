import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)
  const [name, setName] = useState("Ali")
  const [light, setLight] = useState("off")
  const [login, setLogin] = useState(false)
  const [emoji, setEmoji] = useState("Happy😀")

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
  function almashtirishh() {
    setName("Ali")
  }

  function onLight() {
    setLight("on")
  }
  function offLight() {
    setLight("off")
  }

  function handleLogin() {
    setLogin(!login)
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
        <button onClick={almashtirish}>"Vali" ga Almashtirish</button>
        <button onClick={almashtirishh}>"ALi" ga Almashtirish</button>
        <h1>Name: {name}</h1>
      </div>

      <div>
        <h1>tortinchi vazifa</h1>
        <button onClick={onLight}>yoqish</button>
        <button onClick={offLight}>ochirish</button>
        <h1>light: {light}</h1>
      </div>

      <div>
        <h1>beshinchi vazifa</h1>

        <h1>
          {login ? "✅ Xush kelibsiz!" : "❌ Login qilinmagan"}
        </h1>

        <button onClick={handleLogin}>
          Login holatini o'zgartirish
        </button>
      </div>
    </div>

  )
}

export default App


