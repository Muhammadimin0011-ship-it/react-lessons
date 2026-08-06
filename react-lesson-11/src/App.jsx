import { useState } from 'react'
import './App.css'

const ALL_SEATS = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4']

function App() {
  const [selectedSeats, setselectedSeats] = useState([])


  function heandleAdd(item) {
    setselectedSeats([...selectedSeats, item])
    if (selectedSeats.includes(item)) {
      setselectedSeats(selectedSeats.filter((i) => i !== item))
    } else {
      setselectedSeats([...selectedSeats, i])
    }
  }

  function heandleClear(array) {
    setselectedSeats([])
  }

  return (
    <div>
      <div className='wrapper'>
        {ALL_SEATS.map((item) => (
          <button className={selectedSeats.includes(item) ? "bu" : ""} onClick={() => heandleAdd(item)}>{item}</button>
        ))}
      </div>

      <h2>{selectedSeats.length} seats selected</h2>

      <div className='sel'>
        {selectedSeats.join(' - ')}
      </div>
      <button onClick={heandleClear}>clear all</button>
    </div>
  )
}

export default App
