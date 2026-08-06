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

  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [filter, setFilter] = useState("Barchasi");

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

  function addStudent() {
    if (name === "" || age === "") {
      return alert("Barcha ma'lumotlarni kiriting");
    }

    const newStudent = {
      name,
      age,
      active: true,
    };

    setStudents([...students, newStudent]);
    setName("");
    setAge("");
  }

  function toggleStatus(index) {
    const updatedStudents = students.map((item, itemIndex) => {
      if (itemIndex === index) {
        return {
          ...item,
          active: !item.active,
        };
      }

      return item;
    });

    setStudents(updatedStudents);
  }

  function deleteStudent(index) {
    const newStudents = students.filter(
      (item, itemIndex) => itemIndex !== index
    );

    setStudents(newStudents);
  }

  const total = students.length;

  const activeStudents = students.filter((item) => item.active).length;

  const graduatedStudents = students.filter((item) => !item.active).length;


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

      <hr />
      <hr />


      <div>
        <h2>Jami: {total}</h2>
        <h2>Faollar: {activeStudents}</h2>
        <h2>Bitirganlar: {graduatedStudents}</h2>

        <hr />

        <input
          type="text"
          placeholder="Ism"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Yosh"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button onClick={addStudent}>Qo'shish</button>

        <hr />

        <button onClick={() => setFilter("Barchasi")}>
          Barchasi
        </button>

        <button onClick={() => setFilter("Faollar")}>
          Faollar
        </button>

        <button onClick={() => setFilter("Bitirganlar")}>
          Bitirganlar
        </button>

        <hr />

        {students
          .filter((item) => {
            if (filter === "Barchasi") {
              return true;
            }

            if (filter === "Faollar") {
              return item.active;
            }

            return !item.active;
          })
          .map((item, index) => (
            <div key={index}>
              <h2>👤 {item.name}</h2>

              <p>{item.age} yosh</p>

              <p>
                Status: {item.active ? "Faol" : "Bitirgan"}
              </p>

              <button onClick={() => toggleStatus(index)}>
                Bitirdi
              </button>

              <button onClick={() => deleteStudent(index)}>
                O'chirish
              </button>

              <hr />
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
