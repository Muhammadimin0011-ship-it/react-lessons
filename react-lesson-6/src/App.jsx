import { useState } from 'react'
import './App.css'
import Button from './button'
import Input from "./input";

function App() {
  const [count, setcount] = useState("Qidiruv boshlash uchun yozishni boshlang...")
  const [lle, setlle] = useState("")
  const [password, setpassword] = useState("")
  const [text, setText] = useState("");



  function Filtrinput() {
    if (password.length === 0) {
      return "Parol kiriting";
    } else if (password.length <= 5) {
      return "🔴 Weak";
    } else if (password.length <= 10) {
      return "🟡 Medium";
    } else {
      return "🟢 Strong";
    }
  }
  return (
    <>
      <div>
        <h1>vazifa 1</h1>

        <Button size={"small"}>small</Button>
        <Button size={"medium"}>medium</Button>
        <Button size={"large"}>large</Button>
      </div>
      <div>
        <h1>vazifa 2</h1>

        <h1>{count}</h1>

        <input style={{ outlineColor: count.length >= 8 ? "green" : "red" }}
          onChange={(e) => { setcount(e.target.value) }} type="text" />
      </div>

      <div>
        <h1>vazifa 3</h1>

        <h1 style={{ color: lle.length >= 20 ? "red" : "black" }}>{lle}</h1>

        <input onChange={(e) => { setlle(e.target.value) }} type="text" />

        <h4>Belgilar soni: {lle.length}</h4>
      </div>

      <div>
        <h1>vazifa 4</h1>

        <input
          type="password"
          placeholder="Parol kiriting..."
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <h3>{Filtrinput()}</h3>
      </div>

      <div>

        <h1>Character Counter</h1>

        <textarea
          placeholder="Matn yozing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          cols={40}
        ></textarea>

        <h3>Belgilar: {text.length}</h3>

        {text.length > 100 && <h3>⚠️ Juda uzun matn</h3>}

      </div>

      <div>
        <div>
          <Input label="Ism: " placeholder="Ismingizni kiriting" type="text" />
          <Input
            label="Familiya: "
            placeholder="Familiyangizni kiriting"
            type="password"
          />
        </div>
      </div>

      
    </ >

  )
}

export default App
