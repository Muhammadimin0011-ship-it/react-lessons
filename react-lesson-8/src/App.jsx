import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showProfile, setshowProfile] = useState(true)
  const [name, setName] = useState("");
  const [search, setsearch] = useState("")

  useEffect(() => {
    console.log(`searching ${search}`);

  }, [search])

  useEffect(() => {
    console.log("Theme changed.");
  }, [darkMode]);

  function changeTheme() {
    setDarkMode(!darkMode);
  }


  useEffect(() => {
    if (showProfile) {
      console.log("Profile ko'rsatildi.");
    } else {
      console.log("Profile yashirildi.");
    }
  }, [showProfile]);

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


  useEffect(() => {
    document.title = name;
  }, [name]);


  return (
    <div>

      <div className={darkMode ? "dark" : "light"}>
        <h1>{darkMode ? "🌙 Dark Mode" : "🌞 Light Mode"}</h1>

        <button onClick={changeTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="container">
        <button onClick={toggleProfile}>Hide Profile</button>

        <div className="card">
          <h1>👤</h1>
          <h2>Ali Valiyev</h2>
          <p>Frontend Developer</p>
          <p>📍 Jizzax</p>
        </div>
      </div>

      <div className="container">
        <input
          type="text"
          placeholder="Ismingizni kiriting"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h1>Salom, {name}!</h1>
      </div>

      <div className='container'>
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

      
    </div>


  )
}

export default App