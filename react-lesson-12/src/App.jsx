import { useState } from 'react'
import './App.css'

const foods = [
  { id: 1, name: "Lavash", category: "Fast Food" },
  { id: 2, name: "Burger", category: "Fast Food" },
  { id: 3, name: "Osh", category: "Milliy" },
  { id: 4, name: "Manti", category: "Milliy" }
]


function App() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("Hammasi");

  function addBook() {
    if (title === "" || author === "") {
      return alert('xamma malumotlarni toldiring')
    }
    const newBook = {
      title: title,
      author: author,
      completed: false,
    };

    setBooks([...books, newBook])

    setTitle("")
    setAuthor("")


  }

  function toggleComplete(index) {
    const updatedBooks = books.map((item, itemIndex) => {
      if (itemIndex === index) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    });

    setBooks(updatedBooks);
  }

  function heandleDelete(index) {
    const deleteItem = books.filter((item, itemindex) => itemindex !== index);

    setBooks(deleteItem)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Kitob nomi"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Muallif"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={addBook}>Add book</button>

      <hr />


      <input
        type="text"
        placeholder="Qidirish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />



      <div>
        {books.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        }).map((item, index) => (
          <div key={index}>
            <h3>📖 {item.title}</h3>

            <p>👤 {item.author}</p>

            <p>
              Status: {item.completed ? "O'qildi" : "O'qilmagan"}
            </p>

            <button onClick={() => toggleComplete(index)}>✅ O'qildi</button>

            <button onClick={() => { heandleDelete(index) }}>🗑 O'chirish</button>
          </div>
        ))}
      </div>

      <hr />
      <hr />


      <div>
        <button onClick={() => setCategory("Hammasi")}>
          Hammasi
        </button>

        <button onClick={() => setCategory("Fast Food")}>
          Fast Food
        </button>

        <button onClick={() => setCategory("Milliy")}>
          Milliy
        </button>
        {
          foods
            .filter((item) => {
              if (category === "Hammasi") {
                return true;
              } else {
                return item.category === category;
              }
            })
            .map((item) => (
              <div key={item.id}>
                <h2>🍔 {item.name}</h2>

                <p>Kategoriya: {item.category}</p>

                <button>Buyurtma berish</button>
              </div>
            ))}
      </div>
    </div>
  )
}

export default App
