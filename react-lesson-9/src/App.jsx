import { useState } from 'react'
import './App.css'

const product = [
  { id: 1, name: "Apple", price: 5000 },
  { id: 2, name: "Banana", price: 7000 },
  { id: 3, name: "Orange", price: 9000 },
]



function App() {
  const [count, setCount] = useState([])


  function addToCart(item) {
    setCount([...count, { ...item, quentitiy: 1 }])
  }

  function removeItem(id) {
    const filtered = count.filter((item) => item.id !== id)

    setCount(filtered)
  }

  function heandleplus(id) {
    const p = count.map((item) => {
      if (item.id === id) {
        return { ...item, quentitiy: item.quentitiy + 1 }
      } else {
        return item
      }


    });
    setCount(p)
  }


  function heandleminus(id) {
    const m = count.map((item) => {
      if (item.id === id) {
        return { ...item, quentitiy: item.quentitiy - 1 }
      } else {
        return item
      }


    });
    setCount(m)
  }


  return (
    <div>
      <ul>
        {product.map((item) => {
          return (
            <li>
              <h1>{item.name}</h1>

              <h4>{item.price}</h4>

              <button onClick={() => addToCart(item)}>+ Add to cart</button>
            </li>
          )
        })}
      </ul>

      <hr />
      {count.map((item) => {
        return (
          <li>
            <h1>{item.name}</h1>

            <h4>{item.price}</h4>

            <button onClick={() => { removeItem(item.id) }}>remove</button>
            <br />
            <br />

            <button onClick={() => heandleplus(item.id)}>+</button>
            <h2>{item.quentitiy}</h2>
            <button onClick={() => heandleminus(item.id)}>-</button>
          </li>
        )
      })}
    </div>
  )

}

export default App
