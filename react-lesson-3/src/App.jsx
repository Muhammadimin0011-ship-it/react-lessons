import { useState } from 'react'
import './App.css'
import { sculptureList } from "./data"

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleNext() {
    setActiveIndex(activeIndex + 1)


    if (activeIndex === 0) {
      activeIndex = sculptureList.length - 1
    } else {

    }
  }

  function handlePrev() {
    setActiveIndex(activeIndex - 1)


    if (activeIndex === sculptureList.length - 1) {
      setActiveIndex(0)
    } else {

    }
  }
  return (



    <div>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>prev</button>
      <div>
        <img src={sculptureList[activeIndex].url}
          alt={sculptureList[activeIndex].alt}
        />


        <h1>{sculptureList[activeIndex].name}</h1>
        <h2>{sculptureList[activeIndex].artist}</h2>
        <p>{sculptureList[activeIndex].description}</p>
      </div>
    </div>
  )
}

export default App
