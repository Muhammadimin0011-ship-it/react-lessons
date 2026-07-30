import { useState } from 'react'
import './App.css'
import Button from './button'

function App() {
  const [count, setcount] = useState("Qidiruv boshlash uchun yozishni boshlang...")
  const [lle, setlle] = useState("")

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

        <h1 style={{color: lle.length > 20 ? "red" : "black"}}>{lle}</h1>

        <input onChange={(e) => {setlle(e.target.value)}} type="text" />

        <h4>Belgilar soni: {lle.length}</h4>
      </div>
    </>
  )
}

export default App
