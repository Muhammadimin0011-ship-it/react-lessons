import { useState, useEffect, } from 'react'
import './App.css'

function App() {
  const colors = ['red', 'blue', 'green', 'orange', 'purple']


  const [darkMode, setDarkMode] = useState(false)
  const [showProfile, setshowProfile] = useState(true)
  const [name, setName] = useState("");
  const [search, setsearch] = useState("")
  const [text, setText] = useState("")
  const [color, setcolor] = useState("white")
  const [manfiy, setmanfiy] = useState(0)
  //const [height, setheight] = useState(0)
  //const [kilo, setkilo] = useState(0)

  useEffect(() => {
    console.log(`belgilar soni ${text.length}`);

  }, [text])

  useEffect(() => {
    console.log(`searching ${search}`);

  }, [search])

  useEffect(() => {
    console.log("Theme changed.");
  }, [darkMode]);

  useEffect(() => {
    if (showProfile) {
      console.log("Profile ko'rsatildi.");
    } else {
      console.log("Profile yashirildi.");
    }
  }, [showProfile]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    document.body.style.backgroundColor = color
    console.log(`background color changed.`);
  }, [color])

  useEffect(() => {
    console.log(`counter  ${manfiy}`);
  }, [manfiy])


  function changeTheme() {
    setDarkMode(!darkMode);
  }


  function toggleProfile() {
    setshowProfile(!showProfile);
  }

  if (!showProfile) {
    return (
      <div className="container">
        <button onClick={toggleProfile}>Show Profile</button>
      </div>
    );
  }

  function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length)
    setcolor(colors[randomIndex])
  }

  function increment() {
    setmanfiy(manfiy + 1)
  }


  function decrement() {
    setmanfiy(manfiy - 1)
  }


  function reset() {
    setmanfiy(0)
  }

  // function heightt() {
  //   
  // }



  return (
    <div>

      <div className={darkMode ? "dark" : "light"}>
        <h1>{darkMode ? "🌙 Dark Mode" : "🌞 Light Mode"}</h1>

        <button onClick={changeTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div>
        <button onClick={toggleProfile}>Hide Profile</button>

        <div className="card">
          <h1>👤</h1>
          <h2>Ali Valiyev</h2>
          <p>Frontend Developer</p>
          <p>📍 Jizzax</p>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Ismingizni kiriting"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h1>Salom, {name}!</h1>
      </div>

      <div>
        <input type="text"
          placeholder='Qidiring...'
          value={search}
          onChange={(e) => setsearch(e.target.value)} />

        {search ? (
          <h2>{search}</h2>
        ) : (
          <h2>Qidirish uchun yozishni boshlang...</h2>
        )}
      </div>

      <div>
        <textarea
          placeholder="Matn yozing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <h2
          className={text.length > 100 ? "red" : text.length > 50 ? "yellow" : "black"}>
          Belgilar soni: {text.length}
        </h2>
      </div>

      <div>
        <h1>Current Color: {color}</h1>

        <button onClick={changeColor}>
          Change Color
        </button>
      </div>

      <div>
        <h1
          className={manfiy > 0 ? "green" : manfiy < 0 ? "red" : "black"}
        >
          {manfiy}
        </h1>

        <div className="buttons">
          <button onClick={increment}>➕ Increment</button>
          <button onClick={decrement}>➖ Decrement</button>
          <button onClick={reset}>🔄 Reset</button>
        </div>
      </div>
    </div>


  )
}

export default App