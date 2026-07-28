import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)
  const [name, setName] = useState("Ali")
  const [light, setLight] = useState("off")
  const [login, setLogin] = useState(false)
  const [emoji, setEmoji] = useState("Happy😀")
  const [color, setColor] = useState("black")
  const [score, setScore] = useState(65)
  const [text, setText] = useState("block")

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

  function reverseEmoji() {
    setEmoji("Sad😔")
  }

  function reverseEmojis() {
    setEmoji("cool😎")
  }

  function changeColor() {
    setColor("red")
  }

  function changeColorr() {
    setColor("black")
  }

  function plusScore() {
    setScore(score + 5);
  }

  function minusScore() {
    setScore(score - 5);
  }

  function changeText() {
    setText("none")
  }

  function changeTextt() {
    setText("block")
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

      <div>
        <h1>oltinchi vazifa</h1>
        <button onClick={reverseEmoji}>Sad😔</button>
        <button onClick={reverseEmojis}>Cool😎</button>
        <h1>Current mod: {emoji}</h1>
      </div>

      <div>
        <h1>yetinchi vazifa</h1>
        <button onClick={changeColor}>qizil</button>
        <button onClick={changeColorr}>qora</button>
        <h1 style={{ color: color }}>React js</h1>
      </div>

      <div>
        <h1>sokizinchi vazifa</h1>

        <h1>baho {score}</h1>

        <button onClick={plusScore}>+5</button>
        <button onClick={minusScore}>-5</button>

        <h2>
          {score >= 70 ? "✅ O'tdi" : "❌ Yiqildi"}
        </h2>
      </div>

      <div>
        <h1>toqizinchi vazifa</h1>
        <button onClick={changeTextt}>korinadi</button>
        <button onClick={changeText}>korinmaydi</button>

        <h1 style={{ display: text }}>bu matn korinib turibdi</h1>
      </div>
    </div>

  )
}

export default App


