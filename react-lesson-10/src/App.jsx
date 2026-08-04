import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food & Drinks");
  const [date, setDate] = useState("");

  const totalExpense = expenses.reduce((sum, item) => {
    return sum + Number(item.amount)
  }, 0)

  function addExpense() {
    const newExpense = {
      title,
      amount,
      category,
      date
    }

    setExpenses([...expenses, newExpense])

    setTitle("");
    setAmount("");
    setCategory("Food & Drinks");
    setDate("");
  }
  function deleteExpense(index) {
    const deleteExpenses = expenses.filter((item, itemindex) => itemindex !== index);

    setExpenses(deleteExpenses)
  }



  useEffect(() => {
    document.title = `Expenses (${expenses.length})`;
  }, [expenses]);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Food & Drinks">Food & Drinks</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Housing">Housing</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Work">Work</option>
          <option value="Travel">Travel</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={addExpense}>Add Expense</button>
      </div>

      <div className="expense-list">
        {expenses.map((expense, index) => (
          <div className="expense-card" key={index}>
            <h3><strong>Name:</strong> {expense.title}</h3>

            <p>
              <strong>Amount:</strong> {expense.amount} so'm
            </p>

            <p>
              <strong>Category:</strong> {expense.category}
            </p>

            <p>
              <strong>Date:</strong> {expense.date}
            </p>

            <button
              className="delete-btn"
              onClick={() => deleteExpense(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <h2 className="total-expense">
        Total Expense: {totalExpense} so'm
      </h2>
    </div>
  );
}

export default App
