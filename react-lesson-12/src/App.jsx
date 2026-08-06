import { useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [search, setSearch] = useState("")


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
    </div>
  )
}

export default App
