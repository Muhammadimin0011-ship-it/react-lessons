import { useState } from 'react'
import './App.css'
import Button from './button'
import Input from "./input";

function App() {
  const [count, setcount] = useState("Qidiruv boshlash uchun yozishni boshlang...")
  const [lle, setlle] = useState("")
  const [password, setpassword] = useState("")
  const [text, setText] = useState("");
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });



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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
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






      <div>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Ism: "
        />
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Email: "
        />
        <input
          type="number"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          placeholder="Telefon raqam: "
        /><label htmlFor="textareea">Xabar kiriting: </label>
        <textarea
          name="message"
          value={contact.message}
          id="textareea"
          onChange={handleChange}
          placeholder="Xabar yozing"
        ></textarea>
        <h3>Kiritilayotgan ma'lumotlar:</h3>
        <p>Ism: {contact.name}</p>
        <p>Email: {contact.email}</p>
        <p>Telefon: {contact.phone}</p>
        <p>Xabar: {contact.message}</p>
      </div>
    </ >

  )
}

export default App
